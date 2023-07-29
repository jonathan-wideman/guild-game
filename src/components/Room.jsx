import React from 'react'
import { useGameStore } from '../store/store'
import { DebugContainer } from './DebugContainer'

const Room = ({ room }) => {
  const removeRoom = useGameStore((state) => state.removeRoom)

  return (
    <div className='room glass flex-column p1'>
      <h3>Room {room.number}</h3>

      <DebugContainer>
        <button onClick={() => removeRoom(room.id)}>delete</button>
      </DebugContainer>

      <div>Type: {room.type}</div>
      <div>Availability: {room.availability ? 'Available' : 'Occupied'}</div>
      <div>Price: ${room.price} per night</div>
    </div>
  )
}

export default Room
