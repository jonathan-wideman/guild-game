import { createContext, useContext, useReducer, useState } from 'react';

const INITIAL_DEBUG_MODE = true;

const DebugContext = createContext(null);

export function DebugProvider({ children }) {
  const [debug, setDebug] = useState(INITIAL_DEBUG_MODE);

  return (
    <DebugContext.Provider value={{ debug, setDebug }}>
      {children}
    </DebugContext.Provider>
  );
}

export function useDebug() {
  return useContext(DebugContext);
}
