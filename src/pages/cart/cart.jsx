import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../components/layout/layout'
import { CartItem } from '../../components/cartItem/cartItem'
import { CartContext } from '../../context/cartContext/cartContext'
import './cart.css'

function Cart () {
    const {cart, clear} = useContext(CartContext)

    let carritoVacio
    cart.length == 0 ? carritoVacio = true : carritoVacio =false

    const totalCharge = () => {
        if(!carritoVacio) {
            let charges = (cart.map(obj => (obj.item.price * obj.quantity)))
            return charges.reduce((acc, cur) => acc + cur)
        } 
    }
    
    return (
        <Layout>
            <div className='cartContainer'>
                <h1>Carrito</h1>
                <hr/>
                {
                carritoVacio ? 
                <Fragment>
                    <h2>No has agregado nada al carrito todavia!</h2>
                    <Link className='link btn' to='./'>Quiero tentarme con algo!</Link>           
                </Fragment>
                :
                <Fragment>
                    {cart.map(obj => <><CartItem item={obj.item} quantity={obj.quantity} key={obj.item.id}/> <hr/> </>)} 
                    <h2 className='precioTotal'>Total {totalCharge()}</h2>
                    <button className='btn' onClick={clear}>Vaciar carrito</button>
                    <button className='btn'>Continuar compra</button>                
                </Fragment>
                }
            </div>   
        </Layout>
    )
}

export { Cart }