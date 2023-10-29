import React, { useState } from 'react';
import { Icon } from '@iconify/react';
const QuantitySelector = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const clearQuantity = () => {
        setQuantity(0); // You can set it to 1 if you want to reset it to 1 instead
    };

    return (
        <div>
            <button onClick={decrement} disabled={quantity === 1}>
                {quantity === 1 ? (
                    <Icon icon="octicon:trash-24" color="#0286d0" onClick={clearQuantity} />
                ) : (
                    '-'
                )}
            </button>
            <span>{quantity}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default QuantitySelector;