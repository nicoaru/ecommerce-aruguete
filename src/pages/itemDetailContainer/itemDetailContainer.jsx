import {useState, useEffect} from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { Layout } from '../../components/layout/layout'
import { ItemDetail } from '../../components/itemDetail/itemDetail'
import './itemDetailContainer.css'


function ItemDetailContainer(props) {
    
    //PRODUCTO que vendria del servidor
    const producto = {id: 0,
        title: 'ZUKINI & CREAM',
        price: 350,
        description: 'Salsa de tomate y salteado de zukinis y cebolla, en salsa blanca bieeeen cremosa.',
        pictureUrl: '/recursos/zukini.png',
        category: 'pizzas'}

    //ITEM ID que se obtiene por parametro
    // const { itemId } = useParams()

    //DEFINO EL STATE itemMostrar
    const [itemMostrar, setItemMostrar] = useState([])


    //PEDIDO AL SERVIDOR DE PRODUCTOS A MOSTRAR (solo en 1er render) Y LO GUARDO EN EL STATE itemMostrar
    useEffect(() => {
        const getItemMostrar = new Promise( (resolve, reject) => {
            setTimeout(
                () => resolve (producto),
                2000);
        }) 
        getItemMostrar.then( 
            item => {
                setItemMostrar(item)
                console.log(`El producto que se detalla es: ${item.title}`)
            },
            error => {
                console.log(`Ooops .. Hubo un error trayendo del servidor el producto a mostrar. Por favor intenta nuevamente mas tarde`)
            })
    }, [])


    return(
        <Layout>
            <ItemDetail item={itemMostrar}/>
        </Layout>
    )
}

export { ItemDetailContainer}