import { createContext, useContext, useReducer } from 'react';
import { initialGuests } from '../store';
import { useRooms } from './RoomsContext';

const GuestsContext = createContext(null);
const GuestsDispatchContext = createContext(null);

export function GuestsProvider({ children }) {
  const [guests, guestsDispatch] = useReducer(guestsReducer, initialGuests);

  return (
    <GuestsContext.Provider value={guests}>
      <GuestsDispatchContext.Provider value={guestsDispatch}>
        {children}
      </GuestsDispatchContext.Provider>
    </GuestsContext.Provider>
  );
}

export function useGuests() {
  return useContext(GuestsContext);
}

export function useGuestsDispatch() {
  return useContext(GuestsDispatchContext);
}

export const GUESTS_ACTION_TYPES = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  ASSIGN: 'ASSIGN',
  LEAVE: 'LEAVE',
};

// export const ASSIGN_ROOM_STRATEGIES = {
//   ANY: 'ANY',
// };

// function findRoomByStrategy(guest, strategy) {
//   switch (strategy.type) {
//     case ASSIGN_ROOM_STRATEGIES.ANY: {
//       return;
//     }
//     default: {
//       throw Error('Unknown strategy: ' + strategy);
//     }
//   }
// }

function guestsReducer(guests, action) {
  switch (action.type) {
    case GUESTS_ACTION_TYPES.ADD: {
      return [...guests, { ...action.guest }];
    }
    case GUESTS_ACTION_TYPES.REMOVE: {
      return guests.filter((g) => g.id !== action.id);
    }
    // case 'changed': {
    //   return guests.map((t) => {
    //     if (t.id === action.task.id) {
    //       return action.task;
    //     } else {
    //       return t;
    //     }
    //   });
    // }
    case GUESTS_ACTION_TYPES.ASSIGN: {
      if (!action.roomId) {
        return guests;
      }
      return guests.map((g) =>
        g.id === action.id ? { ...g, roomId: action.roomId } : g
      );
    }
    case GUESTS_ACTION_TYPES.LEAVE: {
      return guests.map((g) =>
        g.id === action.id ? { ...g, roomId: null } : g
      );
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
