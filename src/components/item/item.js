import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'

function Item({item}) {

    return(

        <div id={item.id} className='item-card'>
            <Link className='link' to={`/item/${item.id}`}>
            <div className='imgContainer'>
                <img src={item.pictureUrl} width='100%' alt='imagen del producto'/>
            </div>            
            <h1 className='title'>{item.title}</h1>
            <h2 className='price'>$ {item.price}</h2>
            <p className='description'>{item.description}</p>
            <Link className='link' to={`/category/${item.category}`}><p className='category'>· {item.category} ·</p></Link>            
            </Link>

        </div>

    )
}

export { Item }