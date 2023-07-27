import './App.css';
import React, { useMemo } from 'react';
import Inn from './components/Inn';
import Time from './components/Time';
import { DebugProvider } from './context/DebugContext';
import TabbedView from './components/TabbedView';
import GuestsView from './components/GuestsView';
import RoomsView from './components/RoomsView';
import StaffView from './components/StaffView';
import { useGameStore } from './store/store';
import Title from './components/Title';

const App = () => {
  return (
    <AppProviders>
      <AppInterior />
    </AppProviders>
  );
};

const AppProviders = ({ children }) => {
  return <DebugProvider>{children}</DebugProvider>;
};

const AppInterior = () => {
  // state
  const game = useGameStore((state) => state.game);
  const inn = useGameStore((state) => state.inn);
  const rooms = useGameStore((state) => state.rooms);
  const guests = useGameStore((state) => state.guests);
  const staff = useGameStore((state) => state.staff);

  // actions
  const incrementTime = useGameStore((state) => state.incrementTime);
  const addDailyPayments = useGameStore((state) => state.addDailyPayments);
  const removeUnroomedAndDecrementGuestStays = useGameStore(
    (state) => state.removeUnroomedAndDecrementGuestStays
  );
  const addDailyGuests = useGameStore((state) => state.addDailyGuests);

  const processTimeStep = () => {
    incrementTime();
    addDailyPayments();
    removeUnroomedAndDecrementGuestStays();
    addDailyGuests();
  };

  return (
    <div className='background'>
      <div className='container'>
        <Title name={inn.name} />
        <div className='flex-column'>
          <Inn inn={inn} />
          <Time currentDate={game.currentDate} nextDay={() => processTimeStep()} />
          <TabbedView tabs={['Guests', 'Rooms', 'Staff']}>
            <GuestsView guests={guests} />
            <RoomsView rooms={rooms} />
            <StaffView staff={staff} />
          </TabbedView>
        </div>
      </div>
    </div>
  );
};

export default App;
