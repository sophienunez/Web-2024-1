import React, { useState } from 'react';
import Button from '../Button/Button';
import './body.css';

export function Body() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(prevCount => prevCount + 1);
  };

  const subtract = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className='container'>
      <h1>How many times did you swear today?</h1>
      <h2>Swear counter: {count}</h2>
      <div className="button-container">
        <Button handleClick={subtract} text='Subtract' style='subtract-button' />
        <Button handleClick={add} text='Add' style='add-button' />
      </div>
    </div>
  );
}