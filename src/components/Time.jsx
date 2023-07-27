import React from 'react';

const Time = ({ currentDate, nextDay }) => {
  return (
    <div className="time glass flex-column p1">
      <div>{currentDate.toDateString()}</div>
      <button onClick={nextDay}>Next Day</button>
    </div>
  );
};

export default Time;
