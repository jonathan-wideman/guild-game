import { useMemo } from 'react';
import { create } from 'zustand';
import {
  initialGameState,
  initialGuests,
  initialInn,
  initialRooms,
  initialStaff,
} from '../store';

export const useGameStore = create((set) => ({
  game: { ...initialGameState },
  inn: { ...initialInn },
  rooms: [...initialRooms],
  guests: [...initialGuests],
  staff: [...initialStaff],

  incrementTime: () =>
    set((state) => ({
      game: { ...state.game, currentDate: nextDate(state.game.currentDate) },
    })),

  // addMoney: () => set((state) => state),

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

// export function useGuestsRooms() {
//   const guests = useGameStore((state) => state.guests);
//   const rooms = useGameStore((state) => state.rooms);
//   return useMemo(() => getOccupancy(guests, rooms), [guests, rooms]);
// }

export function nextDate(date) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 1);
  return newDate;
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
