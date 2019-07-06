import React from 'react';

const Results = ({numberOfHits, totalDamage}) => {
    return(
        <div>
            <div><label>Hits: </label><span>{numberOfHits}</span></div>
            <div><label>Total Damage: </label><span>{totalDamage}</span></div>
        </div>
    );
};

export default Results;