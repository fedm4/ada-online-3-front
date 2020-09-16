import React, { useState } from 'react';

const ConditionalDisplayB = () => {

    const [displayThird, setDisplayThird] = useState(false);

    return (
        <React.Fragment>
            <button
                type="button"
                onClick={() => setDisplayThird(!displayThird)}
                >
                Show me Third or Fourth!
            </button>
            {
                displayThird ? 
                <div>Third Div!</div>
                :
                <div>Fourth Div!</div>
            }
        </React.Fragment>
        <div>Hola</div>
    );
};

export default ConditionalDisplayB;