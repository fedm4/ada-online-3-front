import React, { useState } from 'react';

const ConditionalDisplayA = () => {

    const [displayFirst, setDisplayFirst] = useState(false);

    if(displayFirst) {
        return (
            <div>
                First Div!
                <button type="button" onClick={() => setDisplayFirst(false)}>Show me Second!</button>
            </div>
        );
    } else {
        return (
            <div>
                Second Div!
                <button type="button" onClick={() => setDisplayFirst(true)}>Show me First</button>
            </div>
        );
    }

};

export default ConditionalDisplayA;