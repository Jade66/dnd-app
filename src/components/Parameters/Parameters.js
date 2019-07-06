import React from 'react';
import {useState} from 'react';
import Size from './Size/Size';
import Number from './Number/Number';


const Parameters = ({numberChangeHandler,selectHandler,defaultNumber,currentSize}) => {
    console.log('Type of handler: ' + (typeof(selectHandler)));
  return (
      <div style={{flexDirection:'row'}}>
        <Size selectHandler={selectHandler} currentSize={currentSize}></Size>
        <Number onChange={numberChangeHandler} numberOfObjects={defaultNumber}></Number>
      </div>
  );
};

export default Parameters;
