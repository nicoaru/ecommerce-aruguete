import React, { useState } from 'react'
import './itemCount.css'

function ItemCount(props) {

    const [itemAmount, setItemAmount] = useState(props.initial)
      
    function onAdd () {
        if (props.stock !== 0) {
            alert(`Ahora se deberian agregar ${itemAmount} items al carrito!`)
        }
    } 


    const restarItem = () => {
        if (props.stock !== 0) {
            if (itemAmount !== 1) {
                let newAmount = itemAmount-1
                setItemAmount(newAmount)
            }
        }
    }
    
    const sumarItem = () => {
        if (props.stock !== 0) {
            if (itemAmount !== props.stock) {
                let newAmount = (itemAmount+1)
                setItemAmount(newAmount)            
            }
        }
    }
    //STYLES
        if (props.stock === 0) {
            
        }

    return (
        <div className='itemCountContainer'>
            <p>Item Count</p>
            <div className='itemCount'>
                <div className='restarItem' onClick={restarItem}>-</div>
                <div className='amount'>{itemAmount}</div>
                <div className='sumarItem' onClick={sumarItem}>+</div>
            </div>
            <div className='btn' onClick={onAdd}>Agregar al carrito</div>
        </div>
    )
}

export { ItemCount}