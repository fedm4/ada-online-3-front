import {useState} from 'react';

const useCounter = (defaultValue = 0) => {

    const [number, setNumber] = useState(defaultValue);

    const decrement = () => setNumber(number-1);
    const increment = () => setNumber(number+1);

    return {
        number,
        decrement,
        increment
    };
}

export default useCounter;
