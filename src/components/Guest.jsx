import React from 'react';
import {
  GUESTS_ACTION_TYPES,
  useGuestsDispatch,
} from '../context/GuestsContext';
import { useGuestsRooms } from '../context/GuestsRoomsContext';
import { DebugContainer } from './DebugContainer';
import RoomBrief from './RoomBrief';

const Guest = ({ guest }) => {
  const guestsDispatch = useGuestsDispatch();
  const { empty } = useGuestsRooms();

  const assignRoom = (guest) => {
    guestsDispatch({
      type: GUESTS_ACTION_TYPES.ASSIGN,
      id: guest.id,
      roomId: empty?.[0]?.roomId,
    });
  };

  return (
    <div className="guest">
      <h3>{guest.name}</h3>

      <DebugContainer>
        <button
          onClick={() =>
            guestsDispatch({ type: GUESTS_ACTION_TYPES.REMOVE, id: guest.id })
          }
        >
          delete
        </button>
      </DebugContainer>

      {/* <p>Room Id: {guest.roomId}</p> */}
      <p>
        Room:{' '}
        {guest.roomId ? (
          <RoomBrief roomId={guest.roomId} />
        ) : empty.length > 0 ? (
          <button onClick={() => assignRoom(guest)}>Assign Room</button>
        ) : (
          <>No available rooms</>
        )}
      </p>
      <p>Check-in Date: {guest.checkInDate?.toDateString()}</p>
      <p>Check-out Date: {guest.checkOutDate?.toDateString()}</p>
      <p>Satisfaction: {guest.satisfaction}</p>
      <p>Preferences:</p>
      <ul>
        <li>Room Type: {guest.preferences.roomType}</li>
        <li>Food: {guest.preferences.food}</li>
      </ul>
      <p>Payment: ${guest.payment}</p>
    </div>
  );
};

export default Guest;
