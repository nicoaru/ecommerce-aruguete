import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../../recursos/cart-icon.png'

function CartWidget() {
    return (
        <Link className='link' to='/cart'>
            <img src={cartIcon} height='35px' alt='cart-widget'/>
        </Link>
    )
}

export { CartWidget }