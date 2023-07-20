import React from 'react';

const Nav = ({ activeList, handleListChange }) => {
  return (
    <nav>
      <button
        onClick={() => handleListChange('rooms')}
        className={activeList === 'rooms' ? 'active' : ''}
      >
        Rooms
      </button>
      <button
        onClick={() => handleListChange('guests')}
        className={activeList === 'guests' ? 'active' : ''}
      >
        Guests
      </button>
      <button
        onClick={() => handleListChange('staff')}
        className={activeList === 'staff' ? 'active' : ''}
      >
        Staff
      </button>
    </nav>
  );
};

export default Nav;
