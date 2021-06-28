import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'
import { ItemCount } from '../itemCount/itemCount'

function Item({item}) {

        let path = `/item/${item.id}`
        console.log(path)
    return(

        <div id={item.id} className='item-card'>
            <div className='imgContainer'>
                <img src={item.pictureUrl} width='100%' alt='imagen del producto'/>
            </div>            
            <Link className='className' to={path}>{item.title}</Link>
            <h2 className='price'>$ {item.price}</h2>
            <p className='description'>{item.description}</p>
            <p className='category'>{item.category}</p>
        </div>

    )
}

export { Item }