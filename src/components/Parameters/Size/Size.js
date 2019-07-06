import React from 'react';

const Size = ({selectHandler, currentSize}) => {
    return (
        <div>
            <select id="size-select" onChange={selectHandler}>
                <option value='Tiny'>Tiny</option>
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
                <option value='Huge'>Huge</option>
            </select>
            <div>
                <div>Max Objects:{currentSize.maxNumber}</div>
                <div>Armor Class:{currentSize.armorClass}</div>
                <div>Hit Points:{currentSize.hitPoints}</div>
                <div>Attack: +{currentSize.attack}</div>
                <div>Damage: {currentSize.damageDie.number}d{currentSize.damageDie.size}+{currentSize.damageModifier}</div>
            </div>
        </div>
    );
};

export default Size;