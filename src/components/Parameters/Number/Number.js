import React from 'react';



const Number = ({ onChange, numberOfObjects }) => {
    return (
        <div>
            <label>Number of Objects:</label><input id='number-of-objects' onChange={onChange} value={numberOfObjects} />
        </div>
    );
};

export default Number;