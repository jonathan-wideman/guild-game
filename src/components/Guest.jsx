import React, { useMemo } from 'react';
import { getOccupancy, getRoomById, useGameStore } from '../store/store';
import { DebugContainer } from './DebugContainer';
import RoomBrief from './RoomBrief';

const Guest = ({ guest }) => {
  const guests = useGameStore((state) => state.guests);
  const rooms = useGameStore((state) => state.rooms);
  const removeGuest = useGameStore((state) => state.removeGuest);
  const assignGuestToRoom = useGameStore((state) => state.assignGuestToRoom);

  const guestsRooms = useMemo(
    () => getOccupancy(guests, rooms),
    [guests, rooms]
  );
  const { empty } = guestsRooms;

  const assignRoom = (guest) => {
    assignGuestToRoom(guest.id, empty?.[0]?.roomId);
  };

  return (
    <div className="guest">
      <h3>{guest.name}</h3>

      <DebugContainer>
        <button
          onClick={() =>
            removeGuest(guest.id)
          }
        >
          delete
        </button>
      </DebugContainer>

      <p>
        Room:{' '}
        {guest.roomId ? (
          <RoomBrief room={getRoomById(rooms, guest.roomId)} />
        ) : empty.length > 0 ? (
          <button onClick={() => assignRoom(guest)}>Assign Room</button>
        ) : (
          <>No available rooms</>
        )}
      </p>
      {/* <p>Check-in Date: {guest.checkInDate?.toDateString()}</p> */}
      {/* <p>Check-out Date: {guest.checkOutDate?.toDateString()}</p> */}
      <p>Stay Duration: {guest.stayDuration}</p>
      <p>Satisfaction: {guest.satisfaction}</p>
      <p>Preferences:</p>
      <ul>
        <li>Room Type: {guest.preferences.roomType}</li>
        <li>Food: {guest.preferences.food}</li>
      </ul>
    </div>
  );
};

export default Guest;
