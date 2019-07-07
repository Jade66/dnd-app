import React from 'react';

const Results = ({ numberOfHits, totalDamage, runReport }) => {
    return (
        <div style={{ flexDirection: 'column' }}>
            <div>{runReport}</div>
            <div><label>Total Damage: </label><span>{totalDamage}</span></div>
            <div>{runReport}</div>
        </div>
    );
};

export default Results;