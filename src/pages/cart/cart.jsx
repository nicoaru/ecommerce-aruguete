import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../components/layout/layout'
import { CartItem } from '../../components/cartItem/cartItem'
import { CartContext } from '../../context/cartContext/cartContext'
import './cart.css'

function Cart () {
    const {cart, clear, totalCharge} = useContext(CartContext)

    let carritoVacio
    cart.length == 0 ? carritoVacio = true : carritoVacio =false
  
    return (
        <Layout>
            <div className='cartContainer'>
                <h1 className='title'>Carrito</h1>
                <hr/>
                {
                carritoVacio ? 
                <Fragment>
                    <h2 className="textWhenEmpty">No has agregado nada al carrito todavia</h2>
                    <div className='cartButtonsContainer'>
                        <Link className='link btn' to='./'>Quiero tentarme con algo!</Link>    
                    </div>       
                </Fragment>
                :
                <Fragment>
                    {cart.map(obj => <><CartItem item={obj.item} quantity={obj.quantity} key={obj.item.id}/> <hr/> </>)} 
                    <h2 className='totalCharge'>Total ${totalCharge()}</h2>
                    <div className='cartButtonsContainer'>
                        <button className='btn' onClick={clear}>Vaciar carrito</button>
                        <Link className='link btn' to='/checkout'>Continuar compra</Link>                          
                    </div>
              
                </Fragment>
                }
            </div>   
        </Layout>
    )
}

export { Cart }