import React from 'react';
import useToggle from '../hooks/useToggle';

const Toggle = () => {
    const [isOn, toggleIt] = useToggle();
    
    return(
        <div>
            <button type="button" onClick={toggleIt}>Toggle</button>
            {isOn ? <h1>HOLI</h1> : null}    
        </div>
    )
};

export default Toggle;
