import { createContext, useContext, useMemo, useReducer } from 'react';
import { getOccupancy } from '../store/store';
import { useGuests } from './GuestsContext';
import { useRooms } from './RoomsContext';
// import { initialGuestsRooms } from '../store';

const GuestsRoomsContext = createContext(null);

export function GuestsRoomsProvider({ children }) {
  const guests = useGuests();
  const rooms = useRooms();

  const guestsRooms = useMemo(
    () => getOccupancy(guests, rooms),
    [guests, rooms]
  );

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
