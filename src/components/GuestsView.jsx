import React from 'react';
import Guest from './Guest';

const GuestsView = ({ guests }) => {
  return (
    <div className="guest-list">
      <h2>Guests</h2>
      {guests.map((guest) => (
        <Guest key={guest.name} guest={guest} />
      ))}
    </div>
  );
};

export default GuestsView;
