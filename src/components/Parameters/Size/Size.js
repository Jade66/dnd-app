import React from 'react';

function formatDamageDice(size) {
    return `${size.damageDie.number}d${size.damageDie.size} +${size.damageModifier}`;
}

const Size = ({ selectHandler, currentSize }) => {

    return (
        <div style={{ flexDirection: 'column' }}>
            <select id="size-select" onChange={selectHandler}>
                <option value='Tiny'>Tiny</option>
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
                <option value='Huge'>Huge</option>
            </select>
            <div style={{ flexDirection: 'column' }}>
                <div>Max Objects:{currentSize.maxNumber}</div>
                <div>Armor Class:{currentSize.armorClass}</div>
                <div>Hit Points:{currentSize.hitPoints}</div>
                <div>Attack: +{currentSize.attack}</div>
                <div>Damage: {formatDamageDice(currentSize)}</div>
            </div>
        </div>
    );
};

export default Size;
export { formatDamageDice };