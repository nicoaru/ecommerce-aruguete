import React from 'react';
import cartIcon from '../../recursos/cart-icon.png'

function CartWidget() {
    return (
        <img src={cartIcon} height='35px' alt='cart-widget'/>
    )
}

export { CartWidget }