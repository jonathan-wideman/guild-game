import React from 'react'
import Button from './atoms/Button'

const Time = ({ currentDate, nextDay }) => {
  return (
    <div className='time glass app-col p-4'>
      <div>{currentDate.toDateString()}</div>
      <Button onClick={nextDay}>Next Day</Button>
    </div>
  )
}

export default Time
