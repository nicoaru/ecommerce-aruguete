import React, {useState, useEffect} from 'react'
import './itemListContainer.css'
import { ItemList } from '../itemList/itemList'

function ItemListContainer(props) {
    
    //ARRAY DE PRODUCTOS QUE VENDRIA DEL SERVIDOR
    const productos = [
        {id: 0,
        title: 'ZUKINI & CREAM',
        price: 350,
        description: 'Salsa de tomate y salteado de zukinis y cebolla, en salsa blanca bieeeen cremosa.',
        pictureUrl: '../../../public/recursos/zukini.png'}, 
        {id: 1,
        title: 'CALABAZA Y SÉSAMO',
        price: 350,
        description: 'Salsa de tomate, cebolla, calabaza asada, verdeo, salsa tahini (sésamo blanco) y semillitas de sésamo negro.',
        pictureUrl: '../../../public/recursos/calabaza.png'}, 
        {id: 2,
        title: 'VEGETALES ASADOS',
        price: 350,
        description: 'Salsa de tomate, queso de papa, y mix de berenjenas, cebolla, pimiento y zanahoria, asados',
        pictureUrl: '../../../public/recursos/vegetales.png'}, 
        {id: 3,
        title: 'FUGAZZETA CON QUESO',
        price: 350,
        description: 'Salsa de tómate, queso de papa, cebolla, verdeo y olivas negras.',
        pictureUrl: '../../../public/recursos/fugazzeta.png'},              
    ]

    const [itemsMostrar, setItemsMostrar] = useState([])


    //PEDIDO AL SERVIDOR DE PRODUCTOS A MOSTRAR Y LO GUARDO EN STATE
    useEffect(() => {
        const pedidoItemsMostrar = new Promise( (resolve, reject) => {
            setTimeout(
                () => resolve (productos),
                2000);
                
        }) 
        pedidoItemsMostrar.then( 
            productos => {
                setItemsMostrar(productos)
                console.log(productos)
            },
            error => {
                console.log(`Hubo un error trayendo del servidor los productos a mostrar. Por favor intenta nuevamente mas tarde`)
            })
    }, [])

    return (
        <>
            {props.greetings}

            <ItemList itemsMostrar={itemsMostrar} />


        </>
    )
}

export { ItemListContainer }