import React, { useMemo } from 'react';

const RoomBrief = ({ room }) => {
  return (
    <span className="room-brief">
      Room {room.number}, ${room.price} per night
    </span>
  );
};

export default RoomBrief;
