import React from 'react'
import Room from './Room'

const RoomsView = ({ rooms }) => {
  return (
    <div className='room-list app-col'>
      {rooms.map((room) => (
        <Room key={room.number} room={room} />
      ))}
    </div>
  )
}

export default RoomsView
