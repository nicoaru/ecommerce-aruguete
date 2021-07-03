import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './itemDetail.css'
import loadingGif from '../../recursos/spinner.svg'
import { ItemCount } from '../itemCount/itemCount' 

function ItemDetail({item}) {
    const [quantity, setQuantity] = useState()
    const onAdd = (quantityToAdd) => setQuantity(quantityToAdd)
    console.log(`Se agregan ${quantity} ${item.title} al carrito`)


    return (
        <div>
            { item.length === 0 ?
            <img src={loadingGif} alt='spinner' height='150px'/> 
            :
            <div id={item.id} className='detail-card'>
                <div className='imgContainer'>
                <img src={item.pictureUrl} width='100%' alt='imagen del producto'/>
                </div>            
                <h1 className='className'>{item.title}</h1>
                <h2 className='price'>$ {item.price}</h2>
                <p className='description'>{item.description}</p>
                <p>{item.category}</p>
                {
                    quantity
                    ? <Link className='link' to='/cart'><button className='btn'>Terminar mi compra</button></Link>
                    : <ItemCount initial={1} stock={item.stock} onAdd={onAdd}></ItemCount>
                }
            </div>   
            }

        </div>

    )
}

export { ItemDetail }