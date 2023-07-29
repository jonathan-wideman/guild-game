import React from 'react'

const Inn = ({ inn }) => {
  return (
    <div className='inn'>
      <div className='glass flex-row p1'>
        <div>Level: {inn.level}</div>
        <div>Money: {inn.money}</div>
        <div>Capacity: {inn.capacity}</div>
      </div>
    </div>
  )
}

export default Inn
