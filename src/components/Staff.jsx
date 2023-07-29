import React from 'react'
import { useGameStore } from '../store/store'
import { DebugContainer } from './DebugContainer'

const Staff = ({ staff }) => {
  const removeStaff = useGameStore((state) => state.removeStaff)

  return (
    <div className='staff glass app-col p-4'>
      <h3>{staff.name}</h3>

      <DebugContainer>
        <button onClick={() => removeStaff(staff.id)}>delete</button>
      </DebugContainer>

      <div>Role: {staff.role}</div>
      <div>Salary: ${staff.salary}</div>
      <div>Skill Level: {staff.skillLevel}</div>
      <div>Happiness: {staff.happiness}</div>
      <div>Energy: {staff.energy}</div>
      <div>Experience: {staff.experience}</div>
    </div>
  )
}

export default Staff
