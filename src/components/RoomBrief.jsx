import React, { useMemo } from 'react';
import { useRooms } from '../context/RoomsContext';

const RoomBrief = ({ roomId }) => {
  const rooms = useRooms();
  const room = useMemo(() => rooms.find((r) => r.id === roomId));

  if (!room) {
    return null;
  }

  return (
    <span className="room-brief">
      Room {room.number}, ${room.price} per night
    </span>
  );
};

export default RoomBrief;
