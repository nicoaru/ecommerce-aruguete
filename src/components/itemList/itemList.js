//
import React from 'react'
import './itemList.css'
import { Item } from '../item/item'
import loadingGif from '../../recursos/spinner.svg'


function ItemList({itemsMostrar, loading, categoryId, error}) {


    let itemsJSX = itemsMostrar.map(item => <Item item={item} key={item.id}/>)

    // console.log(`Se van a mostrar los siguientes productos: ${itemsJSX}`)

    return(
        <div id='itemsContainer'>

        {loading ? 
        <img src={loadingGif} alt='spinner' height='150px'/> 
        : 
            error ?
            <div>Oops.. hubo un error con el servidor, intenta de nuevo mas tarde</div>
            :
                itemsMostrar.length == 0 ?
                <div>No tenemos productos con la categoria {categoryId}...</div>
                :
                itemsJSX 
        }
        
        </div>
    )
}

export { ItemList }