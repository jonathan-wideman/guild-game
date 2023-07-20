import { createContext, useContext, useReducer } from 'react';
import { initialGameState } from '../store';

const GameContext = createContext(null);
const GameDispatchContext = createContext(null);

export function GameProvider({ children }) {
  const [game, gameDispatch] = useReducer(gameReducer, initialGameState);

  return (
    <GameContext.Provider value={game}>
      <GameDispatchContext.Provider value={gameDispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}

export function useGameDispatch() {
  return useContext(GameDispatchContext);
}

export const GAME_ACTION_TYPES = {
  TIME_INCREMENT: 'TIME_INCREMENT',
};

function gameReducer(game, action) {
  switch (action.type) {
    case GAME_ACTION_TYPES.TIME_INCREMENT: {
      const newDate = new Date(game.currentDate);
      newDate.setDate(newDate.getDate() + 1);
      return { ...game, currentDate: newDate };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
