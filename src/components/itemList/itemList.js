import React from 'react'
import './itemList.css'
import { Item } from '../item/item'
import loadingGif from '../../recursos/spinner.svg'


function ItemList({itemsMostrar}) {

const itemsJSX = itemsMostrar.map((item) => {return <Item item={item} key={item.id} />})

    return(
        <div id='itemsContainer'>

        {itemsJSX.length === 0 
        ? <img src={loadingGif} alt='spinner' height='150px'/> 
        : itemsJSX 
        }
         
        </div>
    )
}

export { ItemList }