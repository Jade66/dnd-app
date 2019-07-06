import React from 'react';



const Number = ({onChange, numberOfObjects}) => {
    return (
        <input id='number-of-objects' onChange={onChange} value={numberOfObjects} />
    );
};

export default Number;