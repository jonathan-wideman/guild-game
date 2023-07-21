import React from 'react';
import { useGameStore } from '../store/store';
import { DebugContainer } from './DebugContainer';

const Room = ({ room }) => {
  const removeRoom = useGameStore((state) => state.removeRoom);

  return (
    <div className="room">
      <h3>Room {room.number}</h3>

      <DebugContainer>
        <button onClick={() => removeRoom(room.id)}>delete</button>
      </DebugContainer>

      <p>Type: {room.type}</p>
      <p>Availability: {room.availability ? 'Available' : 'Occupied'}</p>
      <p>Price: ${room.price} per night</p>
    </div>
  );
};

export default Room;
