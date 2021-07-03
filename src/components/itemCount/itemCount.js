import React, { useState } from 'react'
import './itemCount.css'

function ItemCount({ initial, stock, onAdd }) {
    
    console.log(`stock => ${stock}`)
    const [itemAmount, setItemAmount] = useState(stock === 0 ? 'Sin stock' : initial)
    
    let disabled
    stock === 0 ? disabled = true : disabled = false;


    const restarItem = () => {
        if (stock !== 0 && itemAmount > 1) {
            setItemAmount(itemAmount-1)
        }
    } 
    const sumarItem = () => {
        if (stock !== 0 && itemAmount < stock) {
            setItemAmount(itemAmount+1)
        }
    }

    return (
        <div className='itemCountContainer'>
            <div className='itemCount'>
                <div className='restarItem' onClick={restarItem}>-</div>
                <div className='amount'>{itemAmount}</div>
                <div className='sumarItem' onClick={sumarItem}>+</div>
            </div>
            <button className='btn' onClick={() => onAdd(itemAmount)} disabled={disabled}>Agregar al carrito</button>
        </div>
    )

}

export { ItemCount }