import React from 'react'
import { useGameStore } from '../store/store'
import { DebugContainer } from './DebugContainer'
import Button from './atoms/Button'

const Room = ({ room }) => {
  const removeRoom = useGameStore((state) => state.removeRoom)

  return (
    <div className='room glass app-col p-4'>
      <h3>Room {room.number}</h3>

      <DebugContainer>
        <Button onClick={() => removeRoom(room.id)}>delete</Button>
      </DebugContainer>

      <div>Type: {room.type}</div>
      <div>Availability: {room.availability ? 'Available' : 'Occupied'}</div>
      <div>Price: ${room.price} per night</div>
    </div>
  )
}

export default Room
