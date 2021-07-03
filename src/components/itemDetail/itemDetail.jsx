import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './itemDetail.css'
import loadingGif from '../../recursos/spinner.svg'
import { ItemCount } from '../itemCount/itemCount' 
import { CartContext } from '../../context/cartContext/cartContext'


function ItemDetail({item}) {

    const [quantityToAdd, setQuantityToAdd] = useState()
    const onAdd = (quantity) => setQuantityToAdd(quantity)
    console.log(`Se agregaran ${quantityToAdd} ${item.title} al carrito`)

    const {cart, addItem, removeItem, clear} = useContext(CartContext)
    // const cartContextBajado = useContext(CartContext)
    // console.log(`El contenido del cartContextBajado es:`)
    // console.log(cartContextBajado)
    console.log(`El cart tiene lo siguiente`)
    console.log(cart)

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
                    quantityToAdd
                    ? <Link className='link' to='/cart'><button className='btn' onClick={() => addItem(item, quantityToAdd)}>Terminar mi compra</button></Link>
                    : <ItemCount initial={1} stock={item.stock} onAdd={onAdd}></ItemCount>
                }
            </div>   
            }

        </div>

    )
}

export { ItemDetail }