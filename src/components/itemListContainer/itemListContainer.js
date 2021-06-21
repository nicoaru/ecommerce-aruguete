import React from 'react'
import './itemListContainer.css'
import { ItemCount } from '../itemCount/itemCount'

function ItemListContainer(props) {
    

    return (
        <>
            {props.greetings}
            <ItemCount initial={1} stock={7}/>
        </>
    )
}

export { ItemListContainer }