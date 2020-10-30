import React from 'react';
import useCounter from '../hooks/useCounter';

const Counter = () => {

    const {number, increment, decrement} = useCounter(55);

    return(
        <div id="counter">
            <h2>{number}</h2>
            <button type="button" onClick={decrement}>Decrement</button>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
};

export default Counter;
