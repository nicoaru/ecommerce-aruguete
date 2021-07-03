import React, { useContext } from 'react'
import { Layout } from '../../components/layout/layout'
import { CartContext } from '../../context/cartContext/cartContext'


function Cart () {

    const {cart} = useContext(CartContext)

    return (
        <Layout>
            <div>
                <h1>Cart</h1>
                {cart.map(obj => <div><h2>{obj.item.title}</h2><p>Cantidad: {obj.quantity}</p></div>)}


            </div>
        </Layout>
    )
}

export { Cart }