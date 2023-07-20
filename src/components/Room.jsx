import React from 'react';
import { ROOMS_ACTION_TYPES, useRoomsDispatch } from '../context/RoomsContext';
import { DebugContainer } from './DebugContainer';

const Room = ({ room }) => {
  const roomsDispatch = useRoomsDispatch();

  return (
    <div className="room">
      <h3>Room {room.number}</h3>

      <DebugContainer>
        <button
          onClick={() =>
            roomsDispatch({ type: ROOMS_ACTION_TYPES.REMOVE, id: room.id })
          }
        >
          delete
        </button>
      </DebugContainer>

      <p>Type: {room.type}</p>
      <p>Availability: {room.availability ? 'Available' : 'Occupied'}</p>
      <p>Price: ${room.price} per night</p>
    </div>
  );
};

export default Room;
