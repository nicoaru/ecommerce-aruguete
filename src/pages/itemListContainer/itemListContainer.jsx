//
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './itemListContainer.css'
import { Layout } from '../../components/layout/layout'
import { ItemList } from '../../components/itemList/itemList'
import { dataBase } from '../../firebase/firebase'
////
function ItemListContainer() {
    //CATEGORY ID que se obtiene por parametro
    let {categoryId} = useParams();
        // console.log(`En ItemListcontainer estamos en la categoria ${categoryId}`)
    //DEFINO EL STATE loading
    const [loading, setLoading] = useState()
    //DEFINO EL STATE error
    const [error, setError] = useState ()
    //DEFINO EL STATE DONDE GUARDO LOS DATOS DE getItems
    const [items, setItems] = useState([])    
    //DEFINO VARIABLE DONDE GUARDO LOS ITEMS A MOSTRAR (filtrados por categoria)
    let itemsMostrar

    //PEDIDO AL SERVIDOR DE PRODUCTOS A MOSTRAR (cada ve que cambia categoryId) Y LO GUARDO EN STATE items
    useEffect(() => {
        setLoading(true)
        const db = dataBase
        const itemCollection = db.collection('products')
        let filteredItems
        categoryId ? filteredItems = itemCollection.where('category', '==', categoryId).orderBy("title") : filteredItems = itemCollection.orderBy("category", "desc").orderBy("title")
        filteredItems.get()
            .then((querySnapshot) => {
                if(querySnapshot.size > 0) {
                    const itemsTemp = querySnapshot.docs.map(doc => ( { id: doc.id, ...doc.data() }))
                    setItems(itemsTemp)
                    // console.log('itemsTemp', itemsTemp)
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
    }, [categoryId])



    // console.log('state items', items)
    // itemsMostrar = (categoryId ? items.filter(item => item.category === categoryId) : items)


    return (
        <Layout>
            <ItemList itemsMostrar={items} categoryId={categoryId} loading={loading} error={error}/>
        </Layout>
    )
}

export { ItemListContainer }