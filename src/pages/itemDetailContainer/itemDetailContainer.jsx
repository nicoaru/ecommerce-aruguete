//
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../../components/layout/layout'
import { ItemDetail } from '../../components/itemDetail/itemDetail'
import { dataBase } from '../../firebase/firebase'
import './itemDetailContainer.css'


function ItemDetailContainer() {
    
    //ITEM ID que se obtiene por parametro
    const { itemId } = useParams()
    // console.log(`ItemDetailContainer. ID de producto es: ${itemId}`)
    //DEFINO EL STATE loading
    const [loading, setLoading] = useState()
    //DEFINO EL STATE error
    const [error, setError] = useState ()
    //DEFINO EL STATE itemMostrar
    const [itemMostrar, setItemMostrar] = useState([])

    //PEDIDO AL SERVIDOR DE PRODUCTOS A MOSTRAR (solo en 1er render) Y LO GUARDO EN STATE items
    useEffect(() => {
        setLoading(true)
        const db = dataBase
        const docRef = db.collection('products').doc(itemId)
        // console.log('docRef:', docRef)
        docRef.get()
            .then((doc) => {
                if(doc.exists) {
                    const itemTemp = {id: doc.id, ...doc.data()}
                    setItemMostrar(itemTemp)
                    // console.log('itemTemp', itemTemp)
                }
                else {
                    console.log('No hubo resultados para este pedido al servidor..')
                }
            })
            .catch((error) => {
                console.log(`Hubo un error al procesar el pedido al servidor`, error)
                setError(true)
            })            
            .finally(() => {
                setLoading(false)
            })
    }, [])

    // console.log('itemMostrar', itemMostrar)


    return(
        <Layout>
            <ItemDetail item={itemMostrar} loading={loading} error={error}/>
        </Layout>
    )
}

export { ItemDetailContainer}