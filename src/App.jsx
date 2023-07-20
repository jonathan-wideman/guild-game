import React, { useState } from 'react';
import Inn from './components/Inn';
import Time from './components/Time';
import { initialGameState } from './store';
import { DebugProvider } from './context/DebugContext';
import { GuestsProvider, useGuests } from './context/GuestsContext';
import { RoomsProvider, useRooms } from './context/RoomsContext';
import { StaffProvider, useStaff } from './context/StaffContext';
import TabbedView from './components/TabbedView';
import GuestsView from './components/GuestsView';
import RoomsView from './components/RoomsView';
import StaffView from './components/StaffView';
import { InnProvider, useInn } from './context/InnContext';
import {
  GameProvider,
  GAME_ACTION_TYPES,
  useGame,
  useGameDispatch,
} from './context/GameContext';
import { GuestsRoomsProvider } from './context/GuestsRoomsContext';

const App = () => {
  return (
    <AppProviders>
      <AppInterior />
    </AppProviders>
  );
};

const AppProviders = ({ children }) => {
  return (
    <DebugProvider>
      <GameProvider>
        <InnProvider>
          <RoomsProvider>
            <StaffProvider>
              <GuestsProvider>
                <GuestsRoomsProvider>{children}</GuestsRoomsProvider>
              </GuestsProvider>
            </StaffProvider>
          </RoomsProvider>
        </InnProvider>
      </GameProvider>
    </DebugProvider>
  );
};

const AppInterior = () => {
  // const [gameState, setGameState] = useState(initialGameState);
  const game = useGame();
  const gameDispatch = useGameDispatch();
  const inn = useInn();
  const rooms = useRooms();
  const guests = useGuests();
  const staff = useStaff();

  return (
    <>
      <Inn inn={inn} />
      <Time
        currentDate={game.currentDate}
        nextDay={() => gameDispatch({ type: GAME_ACTION_TYPES.TIME_INCREMENT })}
      />
      <TabbedView tabs={['Rooms', 'Guests', 'Staff']}>
        <RoomsView rooms={rooms} />
        <GuestsView guests={guests} />
        <StaffView staff={staff} />
      </TabbedView>
    </>
  );
};

export default App;
