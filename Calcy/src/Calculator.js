import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (e) => {
    const value = e.target.value;
    setInput(input + value);
  };

  const handleEqual = () => {
    setInput(eval(input).toString());
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <input type="text" className="input-field" value={input} />
      <div className="button-container">
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="+" onClick={handleClick}>+</button>
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button value="-" onClick={handleClick}>-</button>
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button value="*" onClick={handleClick}>&times;</button>
        <button value="." onClick={handleClick}>.</button>
        <button value="0" onClick={handleClick}>0</button>
        <button value="/" onClick={handleClick}>÷</button>
        <button onClick={handleClear} className="clear-button">AC</button>
        <button onClick={handleEqual} className="equal-button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
