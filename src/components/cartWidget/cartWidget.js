import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../../recursos/cart-icon.png'
import { CartContext } from '../../context/cartContext/cartContext'
import './cartWidget.css'


function CartWidget() {
    const { cart, totalQuantity } = useContext(CartContext)
    let carritoVacio
    cart.length == 0 ? carritoVacio = true : carritoVacio = false

    // const widgetQuantity = () => {
    //     if(!carritoVacio) {
    //         let quants = cart.map(obj => obj.quantity)
    //         return quants.reduce((acumulado, actual) => acumulado + actual)
    //     }
    // }


    return (
        <div className='cartWidgetContainer'>
            <Link className='link' to='/cart'>
                <img src={cartIcon} height='35px' alt='cart-widget'/>
                <div className='widgetQuantity'>{totalQuantity()}</div>
            </Link>            
        </div> 
    )
}

export { CartWidget }