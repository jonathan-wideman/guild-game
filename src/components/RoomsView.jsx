import React from 'react';
import Room from './Room';

const RoomsView = ({ rooms }) => {
  return (
    <div className="room-list flex-column">
      {rooms.map((room) => (
        <Room key={room.number} room={room} />
      ))}
    </div>
  );
};

export default RoomsView;
