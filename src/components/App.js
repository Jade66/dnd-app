import React from 'react'
import {useState} from 'react';
import Parameters from './Parameters/Parameters';
import Results from './Results/Results';
import css from './App.css';

const App = () => {

  const sizes = {
    Tiny : {
        hitPoints: 20,
        armorClass: 18,
        attack: 8,
        damageDie: {number: 1, size: 4},
        damageModifier: 4,
        maxNumber: 10
    },
    Small : {
        hitPoints: 25,
        armorClass: 16,
        attack: 6,
        damageDie: {number: 1, size: 8},
        damageModifier: 2,
        maxNumber: 10
    },
    Medium : {
        hitPoints: 40,
        armorClass: 13,
        attack: 5,
        damageDie: {number: 2, size: 6},
        damageModifier: 1,
        maxNumber: 5
    },
    Large : {
        hitPoints: 50,
        armorClass: 10,
        attack: 6,
        damageDie: {number: 2, size: 10},
        damageModifier: 2,
        maxNumber: 2
    },
    Huge : {
        hitPoints: 80,
        armorClass: 10,
        attack: 8,
        damageDie: {number: 2, size: 12},
        damageModifier: 4,
        maxNumber: 1
    },
};
const [objectSize, setObjectSize] = useState(sizes.Tiny);
const [numberOfObjects, setNumberOfObjects] = useState(10);
const [totalDamage, setTotalDamage] = useState(0);
const [numberOfHits, setNumberOfHits] = useState(0);
const [armorClass, setArmorClass] = useState(15);

function numberChangeHandler(e) {
    setNumberOfObjects(e.target.value);
}

function selectHandler(e) {
    const newSize = sizes[e.target.value];
    setObjectSize(newSize);
    setNumberOfObjects(newSize.maxNumber);
};

function calculateResults(e) {
  const damageDie = objectSize.damageDie;
  const damageModifier = objectSize.damageModifier;
  let totalDamage = 0;
  const numberOfHits = calculateHits(numberOfObjects, objectSize.attack, armorClass);
  setNumberOfHits(numberOfHits);
  
  for(let i=0; i< numberOfHits; i++) {
    totalDamage += rollDice(damageDie.size, damageDie.number, damageModifier);
  }
  setTotalDamage(totalDamage);
}

function calculateHits(numberOfAttackers, attackModifier, targetAc) {
  let hits = 0;
  for(let i = 0; i < numberOfAttackers; i++) {
    if(rollDice(20, 1, attackModifier) >= targetAc) {
      hits++;
    }
  }
  return hits;
}

function rollDice(dieSize, number, modifier) {
  let i, total = 0;
  for(i = 0; i < number; i++){
    total += Math.floor(Math.random() * dieSize) + 1;
  }
  total += modifier;
  return total;
}

  return (
    <div style={{flexDirection:'column'}}>
    <h3>Animate Objects Calculator</h3>
    <Parameters numberChangeHandler={numberChangeHandler} 
      selectHandler={selectHandler} 
      defaultNumber={numberOfObjects}
      currentSize={objectSize}
    ></Parameters>
    <button onClick={calculateResults}>Go!</button>
    <Results numberOfHits={numberOfHits} totalDamage={totalDamage}>
    </Results>
    </div>
  );
}

export default App