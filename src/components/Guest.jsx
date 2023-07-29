import React, { useMemo } from 'react'
import { getOccupancy, getRoomById, useGameStore } from '../store/store'
import { DebugContainer } from './DebugContainer'
import RoomBrief from './RoomBrief'

const Guest = ({ guest }) => {
  const guests = useGameStore((state) => state.guests)
  const rooms = useGameStore((state) => state.rooms)
  const removeGuest = useGameStore((state) => state.removeGuest)
  const assignGuestToRoom = useGameStore((state) => state.assignGuestToRoom)

  const guestsRooms = useMemo(
    () => getOccupancy(guests, rooms),
    [guests, rooms]
  )
  const { empty } = guestsRooms

  const assignRoom = (guest) => {
    assignGuestToRoom(guest.id, empty?.[0]?.roomId)
  }

  return (
    <div className='guest glass app-col p-4'>
      <h3>{guest.name}</h3>

      <DebugContainer>
        <button onClick={() => removeGuest(guest.id)}>delete</button>
      </DebugContainer>

      <div>
        Room:{' '}
        {guest.roomId ? (
          <RoomBrief room={getRoomById(rooms, guest.roomId)} />
        ) : empty.length > 0 ? (
          <button onClick={() => assignRoom(guest)}>Assign Room</button>
        ) : (
          <>No available rooms</>
        )}
      </div>
      {/* <div>Check-in Date: {guest.checkInDate?.toDateString()}</div> */}
      {/* <div>Check-out Date: {guest.checkOutDate?.toDateString()}</div> */}
      <div>Stay Duration: {guest.stayDuration}</div>
      <div>Satisfaction: {guest.satisfaction}</div>
      {/* <div>Preferences:</div> */}
      {/* <div>Room Type: {guest.preferences.roomType}</div> */}
      {/* <div>Food: {guest.preferences.food}</div> */}
    </div>
  )
}

export default Guest
