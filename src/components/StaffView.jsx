import React from 'react';
import Staff from './Staff';

const StaffView = ({ staff }) => {
  return (
    <div className="staff-list">
      <h2>Staff Members</h2>
      {staff.map((member) => (
        <Staff key={member.name} staff={member} />
      ))}
    </div>
  );
};

export default StaffView;
