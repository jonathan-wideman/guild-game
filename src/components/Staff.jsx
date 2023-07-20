import React from 'react';
import { useGameStore } from '../store/store';
import { DebugContainer } from './DebugContainer';

const Staff = ({ staff }) => {
  const removeStaff = useGameStore((state) => state.removeStaff);

  return (
    <div className="staff">
      <h3>{staff.name}</h3>

      <DebugContainer>
        <button
          onClick={() =>
            removeStaff(staff.id)
          }
        >
          delete
        </button>
      </DebugContainer>

      <p>Role: {staff.role}</p>
      <p>Salary: ${staff.salary}</p>
      <p>Skill Level: {staff.skillLevel}</p>
      <p>Happiness: {staff.happiness}</p>
      <p>Energy: {staff.energy}</p>
      <p>Experience: {staff.experience}</p>
    </div>
  );
};

export default Staff;
