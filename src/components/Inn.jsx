import React from 'react';

const Inn = ({ inn }) => {
  return (
    <div className="inn">
      <h1>Welcome to {inn.name}!</h1>
      <p>Level: {inn.level}</p>
      <p>Money: {inn.money}</p>
      <p>Capacity: {inn.capacity}</p>
    </div>
  );
};

export default Inn;
