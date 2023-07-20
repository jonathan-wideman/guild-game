import { createContext, useContext, useReducer } from 'react';
import { initialInn } from '../store';

const InnContext = createContext(null);
const InnDispatchContext = createContext(null);

export function InnProvider({ children }) {
  const [inn, innDispatch] = useReducer(innReducer, initialInn);

  return (
    <InnContext.Provider value={inn}>
      <InnDispatchContext.Provider value={innDispatch}>
        {children}
      </InnDispatchContext.Provider>
    </InnContext.Provider>
  );
}

export function useInn() {
  return useContext(InnContext);
}

export function useInnDispatch() {
  return useContext(InnDispatchContext);
}

export const INN_ACTION_TYPES = {};

function innReducer(inn, action) {
  switch (action.type) {
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
