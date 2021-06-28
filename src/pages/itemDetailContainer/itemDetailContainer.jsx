import {useState, useEffect} from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { Layout } from '../../components/layout/layout'
import { ItemDetail } from '../../components/itemDetail/itemDetail'
import './itemDetailContainer.css'


function ItemDetailContainer(props) {
    //ARRAY DE PRODUCTOS que vendria del servidor
    const productos = [
        {id: 0,
        title: 'ZUKINI & CREAM',
        price: 350,
        description: 'Salsa de tomate y salteado de zukinis y cebolla, en salsa blanca bieeeen cremosa.',
        pictureUrl: '/recursos/zukini.png',
        category: 'pizzas'},
        {id: 1,
        title: 'CALABAZA Y SÉSAMO',
        price: 350,
        description: 'Salsa de tomate, cebolla, calabaza asada, verdeo, salsa tahini (sésamo blanco) y semillitas de sésamo negro.',
        pictureUrl: '/recursos/calabaza.png',
        category: 'pizzas'}, 
        {id: 2,
        title: 'VEGETALES ASADOS',
        price: 350,
        description: 'Salsa de tomate, queso de papa, y mix de berenjenas, cebolla, pimiento y zanahoria, asados',
        pictureUrl: '/recursos/vegetales.png',
        category: 'pizzas'}, 
        {id: 3,
        title: 'FUGAZZETA CON QUESO',
        price: 350,
        description: 'Salsa de tómate, queso de papa, cebolla, verdeo y olivas negras.',
        pictureUrl: '/recursos/fugazzeta.png',
        category: 'pizzas'},
        {id: 4,
        title: 'Empanada Calabresa',
        price: 75,
        description: 'Longaniza vegana, morrón y queso de tofu🤤 en masa de morrón. Son un 🔥.. ',
        pictureUrl: '/recursos/empanadaLonganiza.png',
        category: 'empanadas'},               
        {id: 5,
        title: 'Empana de Cebolla y Quesofu',
        price: 75,
        description: 'Cebolla caramelizada y queso de tofu en masa de salvado 🤤',
        pictureUrl: '/recursos/empanadaCebolla.png',
        category: 'empanadas'},      
        {id: 6,
        title: 'Empanada de Carne Vegana!!',
        price: 75,
        description: 'Soja texturizada sazonada al wok en masa de salvado 🤤',
        pictureUrl: '/recursos/empanadaCarne.png',
        category: 'empanadas'},   
        {id: 7,
        title: 'Empanada de Jamon y Queso',
        price: 75,
        description: 'Jamón vegetal ahumado y queso de tofu 🤤',
        pictureUrl: '/recursos/empanadaJamon.png',
        category: 'empanadas'},           
    ]
    
    //ITEM ID que se obtiene por parametro
    const { itemId } = useParams()
    console.log(`ItemDetailContainer. ID de producto es: ${itemId}`)

    //DEFINO EL STATE itemMostrar
    const [itemMostrar, setItemMostrar] = useState([])


    //PEDIDO AL SERVIDOR DE PRODUCTOS A MOSTRAR (solo en 1er render) Y LO GUARDO EN EL STATE productos
    useEffect(() => {
        const getProductos = new Promise( (resolve, reject) => {
        setTimeout(
        () => resolve (productos),
        2000);
        }) 
        getProductos.then( 
            items => {
                const item = (items.filter(prod => prod.id === parseInt(itemId))[0])
                setItemMostrar(item)
                console.log(item)
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