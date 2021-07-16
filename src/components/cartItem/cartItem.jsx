import React, { useContext } from 'react'
import {CartItemCount} from '../cartItemCount/cartItemCount'
import { CartContext } from '../../context/cartContext/cartContext'
import deleteImg from '../../recursos/deleteItem.png'
import './cartItem.css'

function CartItem({item, quantity}) {
    const { cart, addItem, removeItem } = useContext(CartContext)
    console.log(item, quantity)


    const onAmountChange = (quantity) => {
        addItem(item, quantity)
    }

    return (
        
        <div className='cartItemContainer'>
            <img className='cartItemImage' src={item.pictureUrl} />
            <h2 className='itemTitle'>{item.title}</h2>
            <CartItemCount initial={quantity} stock={item.stock} onAmountChange={onAmountChange} />
            <h2 className='itemPrice'>${item.price*quantity}</h2>
            <img src={deleteImg} height='30px' width='30px' onClick={() => removeItem(item.id)} alt='delete button'/>
        </div>
        
    )


}

export { CartItem }