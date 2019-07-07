import React from 'react';
import { useState } from 'react';
import Size from './Size/Size';
import Number from './Number/Number';


const Parameters = ({ numberChangeHandler, selectHandler, defaultNumber, currentSize, acChangeHandler, defaultTargetAc }) => {
  console.log('Type of handler: ' + (typeof (selectHandler)));
  return (
    <div style={{ flexDirection: 'column' }}>
      <Size selectHandler={selectHandler} currentSize={currentSize}></Size>
      <Number onChange={numberChangeHandler} numberOfObjects={defaultNumber}></Number>
      <div style={{ flexDirection: 'row' }}>
        <label>Target Armor Class:</label>
        <input id='target-armor-class' defaultValue={defaultTargetAc} onChange={acChangeHandler} />
      </div>
    </div>
  );
};

export default Parameters;
