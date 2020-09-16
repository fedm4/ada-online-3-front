import React, { useState } from 'react';

const Input = () => {
    
    const [inputValue, setInputValue] = useState();
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [message, setMessage] = useState("Mensaje 1");


    const toggleMessage = () => {
        if(message === "Mensaje 1") {
            setMessage("Mensaje 2");
        } else {
            setMessage("Mensaje 1");
        }
    }

    return (
        <React.Fragment>
            <input type="text" onChange={e => setInputValue(e.target.value)}/>

            <input type="checkbox" value="lala" onClick={() => setCheckboxValue(!checkboxValue)} />

            <button type="button" onClick={ toggleMessage }>Click aca para cambiar el mensaje</button>

            <div>
                <div>input: { inputValue }</div>
                <div>checkbox: { checkboxValue ? "TRUE" : "FALSE" }</div>
                <div>Message: { message }</div>
            </div>
        </React.Fragment>
    )
};

export default Input;