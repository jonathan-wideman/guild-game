import React from 'react'

const Inn = ({ inn }) => {
  return (
    <div className='inn'>
      <div className='glass app-row p-4'>
        <div>Level: {inn.level}</div>
        <div>Money: {inn.money}</div>
        <div>Capacity: {inn.capacity}</div>
      </div>
    </div>
  )
}

export default Inn
