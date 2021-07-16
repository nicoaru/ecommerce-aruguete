import React, { useContext, useEffect, useState } from 'react'
import { Layout } from '../../components/layout/layout'
import { dataBase } from '../../firebase/firebase'
import firebase from 'firebase/app'
import { CartContext } from '../../context/cartContext/cartContext'
import { Link } from 'react-router-dom'
import 'firebase/firestore'
import './checkOut.css'



function CheckOut() {
    let name
    let phone
    let email

    const {cart, totalCharge, clear} = useContext(CartContext)
    const [loading, setLoading] = useState()
    const [orderStatus, setOrderStatus] = useState('enCurso')    
    const [orderId, setOrderId] = useState()
    const [orderContent, setOrderContent] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        (Array.isArray(cart) && cart.length) ? setOrderStatus('enCurso') : setOrderStatus('carroVacio')
    }, [])



    //FUNCIONES AUXILIARES DE generateOrder()
    const itemsInCart = () => {
        let items = cart.map(obj => {return {id: obj.item.id, title: obj.item.title, price: obj.item.price, quantity: obj.quantity}})
        return items
    }
    const buyer = () => ({name: name, phone: phone, email: email})
    //
    const generateOrder = () => {
        if(name && phone && email) {
            const newOrder = {
                buyer: buyer(),
                items: itemsInCart(),
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: totalCharge(),
            }      
            setLoading(true)
            const db = dataBase
            db.collection('orders').add(newOrder)
                .then((doc) => {
                    let docId = doc.id
                    setOrderId(docId)                 
                    db.collection('orders').doc(docId).get()
                        .then((doc) => {let docData = {...doc.data()}; setOrderContent(docData)})
                })
                .catch((error) => setError(error))
                .finally(() => {setLoading(false); clear(); setOrderStatus('terminada')})
        }
    }





    return(
        <Layout>

            <div className='checkOutContainer'>
                {
                loading ?
                <p>...cargando</p>
                :
                    orderStatus === 'carroVacio' ?
                    <>
                    <h1>Todavia no cargaste nada al carrito! Por que no vamos a ver si nos tentamos con algo??</h1>  
                    <Link className='link btn' to='./'>Si! Quiero tentarme con algo!</Link>  
                    </>
                    :
                    orderStatus === 'terminada' ?
                        <>
                        <h1 className='title'>La compra fue exitosa!</h1>
                        <p>Tu numero identificador de compra es el siguiente: <strong>{orderId}</strong></p>
                        <Link className='link btn' to='./'>Volver al inicio</Link> 
                        </>
                        :
                            orderStatus === 'enCurso' &&
                            <>
                                <h1 className='title'>Finalizar compra</h1>
                                <hr/>
                                    <div className='datosPersonales'>
                                        <h2>Tus datos</h2>
                                        <form className='form'>
                                            <label className='form-flexItem'>
                                                Nombre
                                                <input type='text' name='nombre' id='nombre' required='true' onChange={(e) => name = e.target.value}/>
                                            </label>
                                            <label className='form-flexItem'>
                                                Telefono
                                                <input type='phone' name='tel' id='tel' required='true' onChange={(e) => phone = e.target.value}/>
                                            </label>
                                            <label className='form-flexItem'>
                                                Email
                                                <input type='email' name='email' id='email' required='true' onChange={(e) => email = e.target.value}/>
                                            </label>
                                        </form>
                                        <button className='btn' onClick={(e) => {generateOrder()}}>Finalizar compra</button>
                                    </div>
                            </>
                }


        </div>

        </Layout>


    )


}




export { CheckOut }