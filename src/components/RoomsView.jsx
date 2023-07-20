import React from 'react';
import Room from './Room';

const RoomsView = ({ rooms }) => {
  return (
    <div className="room-list">
      <h2>Rooms</h2>
      {rooms.map((room) => (
        <Room key={room.number} room={room} />
      ))}
    </div>
  );
};

export default RoomsView;
