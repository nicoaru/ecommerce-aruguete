import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'

function Item({item}) {

        let path = `/item/${item.id}`
        console.log(path)
    return(

        <div id={item.id} className='item-card'>
            <Link className='link' to={path}>
            <div className='imgContainer'>
                <img src={item.pictureUrl} width='100%' alt='imagen del producto'/>
            </div>            
            <h1 className='className'>{item.title}</h1>
            <h2 className='price'>$ {item.price}</h2>
            <p className='description'>{item.description}</p>
            <p className='category'>{item.category}</p>            
            </Link>

        </div>

    )
}

export { Item }