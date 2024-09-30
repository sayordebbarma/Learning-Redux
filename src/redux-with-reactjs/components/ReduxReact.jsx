import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ReduxReact = () => {
  const inputRef = useRef();
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleAddition = () => {
    dispatch({ type: 'ADDITION', payload: { num: inputRef.current.value } });
    inputRef.current.value = ""
  };

  const handleSubstraction = () => {
    dispatch({ type: 'SUBSTRACTION', payload: { num: inputRef.current.value } });
    inputRef.current.value = ""
  };

  return (
    <>
      <h1>Learning Redux-React</h1>
      <h3>Counter: {counter}</h3>
      <div>
        <button
          type='button'
          style={{ margin: '4px' }}
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type='button'
          style={{ margin: '4px' }}
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>
      <div>
        <input
          type='text'
          placeholder='add or sub???'
          style={{ margin: '4px' }}
          ref={inputRef}
        />
        <button
          type='button'
          style={{ margin: '4px' }}
          onClick={handleAddition}
        >
          Add
        </button>
        <button
          type='button'
          style={{ margin: '4px' }}
          onClick={handleSubstraction}
        >
          Sub
        </button>
      </div>
    </>
  );
};

export default ReduxReact;
