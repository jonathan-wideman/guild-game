import React from 'react';
import Guest from './Guest';

const GuestsView = ({ guests }) => {
  return (
    <div className="guest-list flex-column">
      {guests.map((guest) => (
        <Guest key={guest.name} guest={guest} />
      ))}
    </div>
  );
};

export default GuestsView;
