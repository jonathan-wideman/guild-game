import { create } from 'zustand';
import {
  initialGameState,
  initialGuests,
  initialInn,
  initialRooms,
  initialStaff,
} from './data';
import { generateGuests } from './generator';

export const useGameStore = create((set) => ({
  game: { ...initialGameState },
  inn: { ...initialInn },
  rooms: [...initialRooms],
  guests: [...initialGuests],
  staff: [...initialStaff],

  partials: {
    addMoney: (amount) => (state) => ({
      inn: { ...state.inn, money: state.inn.money + amount },
    }),
  },

  incrementTime: () =>
    set((state) => ({
      game: { ...state.game, currentDate: getNextDate(state.game.currentDate) },
    })),

  addMoney: (amount) =>
    set((state) => state.partials.addMoney(amount)(state)),

  addDailyPayments: () =>
    set((state) => {
      const payment = getGuestDailyPayments(state.guests, state.rooms);
      return state.partials.addMoney(payment)(state);
    }),

  removeUnroomedAndDecrementGuestStays: () =>
    set((state) => ({
      guests: state.guests
        .filter((guest) => guest.roomId != null)
        .map((guest) => ({ ...guest, stayDuration: guest.stayDuration - 1 }))
        .filter((guest) => guest.stayDuration > 0),
    })),

  addDailyGuests: () => set((state) => ({ guests: [...state.guests, ...generateGuests()] })),

  addRoom: (room) => set((state) => ({ rooms: [...state.rooms, { ...room }] })),
  removeRoom: (id) =>
    set((state) => ({ rooms: state.rooms.filter((room) => room.id !== id) })),

  addGuest: (guest) =>
    set((state) => ({ guests: [...state.guests, { ...guest }] })),
  removeGuest: (id) =>
    set((state) => ({
      guests: state.guests.filter((guest) => guest.id !== id),
    })),

  addStaff: (staff) =>
    set((state) => ({ staff: [...state.staff, { ...staff }] })),
  removeStaff: (id) =>
    set((state) => ({
      staff: state.staff.filter((staff) => staff.id !== id),
    })),

  assignGuestToRoom: (guestId, roomId) =>
    set((state) => ({
      guests: state.guests.map((guest) =>
        guest.id === guestId ? { ...guest, roomId } : guest
      ),
    })),
}));

export function getRoomById(rooms, roomId) {
  return rooms.find((room) => room.id === roomId);
}

export function getNextDate(date) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 1);
  return newDate;
}

export function getGuestDailyPayments(guests, rooms) {
  const total = guests.reduce((sum, guest) => {
    const price = getRoomById(rooms, guest.roomId)?.price ?? 0;
    return sum + price;
  }, 0);
  return total;
}

export function getOccupancy(guests, rooms) {
  const occupancy = rooms.map((r) => {
    const occupants = guests.filter((g) => g.roomId === r.id);
    return {
      roomId: r.id,
      availableBeds: r.beds - occupants.length,
      occupants,
    };
  });
  const occupied = occupancy.filter((o) => o.occupants.length > 0);
  const empty = occupancy.filter((o) => o.occupants.length === 0);
  return { occupancy, occupied, empty };
}
