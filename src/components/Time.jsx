import React from 'react';

const Time = ({ currentDate, nextDay }) => {
  return (
    <div className="time">
      <p>Current Date: {currentDate.toDateString()}</p>
      <button onClick={nextDay}>Next Day</button>
    </div>
  );
};

export default Time;
