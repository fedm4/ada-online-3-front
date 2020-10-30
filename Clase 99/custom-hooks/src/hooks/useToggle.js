import {useState} from 'react';

const useToggle = (defaultValue = false) => {
    const [isOn, setIsOn] = useState(defaultValue);

    const toggleIt = () => setIsOn(!isOn);

    return [
        isOn,
        toggleIt
    ];
}

export default useToggle;
