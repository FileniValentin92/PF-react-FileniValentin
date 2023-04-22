import React from 'react';
import carts from './assets/carts.svg'

const CartWidget = () => {
    return (
        <div>
            <img src={carts} alt="cart-widget" style={{ maxWidth: '30px', maxHeight: '30px' }} />
            0
        </div>
    );
}

export default CartWidget;