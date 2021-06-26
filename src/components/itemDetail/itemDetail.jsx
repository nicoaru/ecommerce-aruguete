import React from 'react'
import './itemDetail.css'

function ItemDetail({item}) {


    return (
        <div id={item.id} className='card'>
            <div className='imgContainer'>
                <img src={item.pictureUrl} width='100%' alt='imagen del producto'/>
            </div>            
            <h1 className='className'>{item.title}</h1>
            <h2 className='price'>$ {item.price}</h2>
            <p className='description'>{item.description}</p>

        </div>
    )
}

export { ItemDetail }