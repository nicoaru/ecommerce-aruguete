import React from 'react'
import './itemListContainer.css'
import { ItemCount } from '../itemCount/itemCount'

function ItemListContainer(props) {
    
    const onAdd = (items) => {
        if (props.stock !== 0) {
            alert('Ahora se deberian agregar ' + items + ' items al carrito!')
        }
    } 
    return (
        <>
            {props.greetings}
            <ItemCount initial={1} stock={7} onAdd={onAdd} />
        </>
    )
}

export { ItemListContainer }