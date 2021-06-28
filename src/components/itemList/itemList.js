import React from 'react'
import { useParams, Link, NavLink } from 'react-router-dom'
import './itemList.css'
import { Item } from '../item/item'
import loadingGif from '../../recursos/spinner.svg'


function ItemList({itemsMostrar, categoryId}) {


    console.log(`En ItemList estamos en la catetgoria: ${categoryId}`)

    let itemsJSX = categoryId ? 
        itemsMostrar.filter(item => item.category === categoryId).map(item => <Item item={item} key={item.id}/>)
        :
        itemsMostrar.map((item) => <Item item={item} key={item.id}/>);


    console.log(`Se van a mostrar los siguientes productos: ${itemsJSX}`)

    return(
        <div id='itemsContainer'>

        {itemsMostrar.length === 0 
        ? <img src={loadingGif} alt='spinner' height='150px'/> 
        : itemsJSX 
        } 
        
        </div>
    )
}

export { ItemList }