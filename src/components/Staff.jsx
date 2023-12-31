import React from 'react';
import { STAFF_ACTION_TYPES, useStaffDispatch } from '../context/StaffContext';
import { DebugContainer } from './DebugContainer';

const Staff = ({ staff }) => {
  const staffDispatch = useStaffDispatch();

  return (
    <div className="staff">
      <h3>{staff.name}</h3>

      <DebugContainer>
        <button
          onClick={() =>
            staffDispatch({ type: STAFF_ACTION_TYPES.REMOVE, id: staff.id })
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
