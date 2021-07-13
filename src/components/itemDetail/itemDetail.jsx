//
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './itemDetail.css'
import loadingGif from '../../recursos/spinner.svg'
import { ItemCount } from '../itemCount/itemCount' 
import { CartContext } from '../../context/cartContext/cartContext'


function ItemDetail({item, loading, error}) {

    // const [quantityToAdd, setQuantityToAdd] = useState()
    // const onAdd = (quantity) => setQuantityToAdd(quantity)
    // console.log(`Se agregaran ${quantityToAdd} ${item.title} al carrito`)

    const [addedToCart, setAddedToCart] = useState(false)
    const {cart, addItem} = useContext(CartContext)
    
    // console.log(`El cart tiene lo siguiente`)
    // console.log(cart)
    // console.log(item)

    const onAdd = (quantity) => {
        addItem(item, quantity)
        setAddedToCart(true)
    }

    
    return (
        <div>
            { loading ?
            <img src={loadingGif} alt='spinner' height='150px'/> 
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
                        <h1 className='className'>{item.title}</h1>
                        <h2 className='price'>$ {item.price}</h2>
                        <p className='description'>{item.description}</p>
                        <p>{item.category}</p>
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