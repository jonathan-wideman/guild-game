import { createContext, useContext, useReducer } from 'react';
import { initialRooms } from '../store';

const RoomsContext = createContext(null);
const RoomsDispatchContext = createContext(null);

export function RoomsProvider({ children }) {
  const [rooms, roomsDispatch] = useReducer(roomsReducer, initialRooms);

  return (
    <RoomsContext.Provider value={rooms}>
      <RoomsDispatchContext.Provider value={roomsDispatch}>
        {children}
      </RoomsDispatchContext.Provider>
    </RoomsContext.Provider>
  );
}

export function useRooms() {
  return useContext(RoomsContext);
}

export function useRoomsDispatch() {
  return useContext(RoomsDispatchContext);
}

export const ROOMS_ACTION_TYPES = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
};

function roomsReducer(rooms, action) {
  switch (action.type) {
    case ROOMS_ACTION_TYPES.ADD: {
      return [...rooms, { ...action.room }];
    }
    case ROOMS_ACTION_TYPES.REMOVE: {
      return rooms.filter((s) => s.id !== action.id);
    }
    // case 'changed': {
    //   return Rooms.map((t) => {
    //     if (t.id === action.task.id) {
    //       return action.task;
    //     } else {
    //       return t;
    //     }
    //   });
    // }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
