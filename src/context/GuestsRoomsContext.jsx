import { createContext, useContext, useMemo, useReducer } from 'react';
import { useGuests } from './GuestsContext';
import { useRooms } from './RoomsContext';
// import { initialGuestsRooms } from '../store';

const GuestsRoomsContext = createContext(null);

export function GuestsRoomsProvider({ children }) {
  const guests = useGuests();
  const rooms = useRooms();

  const guestsRooms = useMemo(() => {
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
  }, [guests, rooms]);

  console.log(guestsRooms);

  return (
    <GuestsRoomsContext.Provider value={{ ...guestsRooms }}>
      {children}
    </GuestsRoomsContext.Provider>
  );
}

export function useGuestsRooms() {
  return useContext(GuestsRoomsContext);
}
