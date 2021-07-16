//
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './itemDetail.css'
import loadingGif from '../../recursos/spinner.svg'
import { ItemCount } from '../itemCount/itemCount' 
import { CartContext } from '../../context/cartContext/cartContext'


function ItemDetail({item, loading, error}) {

    const [addedToCart, setAddedToCart] = useState(false)
    const {cart, addItem} = useContext(CartContext)
    const onAdd = (quantity) => {
        addItem(item, quantity)
        setAddedToCart(true)
    }

    
    return (
        <div>
            {
            loading ?
            <p>...cargando</p>
            :
                error ?
                <div>Oops.. hubo un error con el servidor, intenta de nuevo mas tarde</div>
                :
                    item.length == 0 ?
                    <div>El producto solicitado ya no se encuentra entre nosotros...</div>
                    :    
                    <div id={item.id} className='detail-card'>
                        <div className='imgContainer'>
                        <img src={item.pictureUrl} width='100%' alt='imagen del producto'/>
                        </div>            
                        <h1 className='title'>{item.title}</h1>
                        <h2 className='price'>$ {item.price}</h2>
                        <p className='description'>{item.description}</p>
                        <Link className='link' to={`/category/${item.category}`}><p className='category'>· {item.category} ·</p></Link>            
                        {
                            addedToCart
                            ? <Link className='link' to='/cart'><button className='btn' >Terminar mi compra</button></Link>
                            : <ItemCount initial={1} stock={item.stock} onAdd={onAdd}></ItemCount>
                        }
                    </div>   
            }

        </div>

    )
}

export { ItemDetail }