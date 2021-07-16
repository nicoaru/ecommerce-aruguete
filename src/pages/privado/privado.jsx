import React, { useContext, useEffect, useState } from 'react'
import { dataBase } from '../../firebase/firebase'
import firebase from 'firebase/app'

function Privado() {

    const productos = [
        {title: 'ZUKINI & CREAM',
        price: 350,
        description: 'Salsa de tomate y salteado de zukinis y cebolla, en salsa blanca bieeeen cremosa.',
        pictureUrl: '/recursos/zukini.png',
        category: 'pizzas',
        stock: 10},
        {
        title: 'CALABAZA Y SÉSAMO',
        price: 350,
        description: 'Salsa de tomate, cebolla, calabaza asada, verdeo, salsa tahini (sésamo blanco) y semillitas de sésamo negro.',
        pictureUrl: '/recursos/calabaza.png',
        category: 'pizzas',
        stock: 0}, 
        {
        title: 'VEGETALES ASADOS',
        price: 350,
        description: 'Salsa de tomate, queso de papa, y mix de berenjenas, cebolla, pimiento y zanahoria, asados',
        pictureUrl: '/recursos/vegetales.png',
        category: 'pizzas',
        stock: 18}, 
        {
        title: 'FUGAZZETA CON QUESO',
        price: 350,
        description: 'Salsa de tómate, queso de papa, cebolla, verdeo y olivas negras.',
        pictureUrl: '/recursos/fugazzeta.png',
        category: 'pizzas',
        stock: 0},
        {
        title: 'Empanada Calabresa',
        price: 75,
        description: 'Longaniza vegana, morrón y queso de tofu🤤 en masa de morrón. Son un 🔥... ',
        pictureUrl: '/recursos/empanadaLonganiza.png',
        category: 'empanadas',
        stock: 3},               
        {
        title: 'Empana de Cebolla y Quesofu',
        price: 75,
        description: 'Cebolla caramelizada y queso de tofu en masa de salvado 🤤',
        pictureUrl: '/recursos/empanadaCebolla.png',
        category: 'empanadas',
        stock: 120},      
        {
        title: 'Empanada de Carne Vegana!!',
        price: 75,
        description: 'Soja texturizada sazonada al wok en masa de salvado 🤤',
        pictureUrl: '/recursos/empanadaCarne.png',
        category: 'empanadas',
        stock: 15},   
        {
        title: 'Empanada de Jamon y Queso',
        price: 75,
        description: 'Jamón vegetal ahumado y queso de tofu 🤤',
        pictureUrl: '/recursos/empanadaJamon.png',
        category: 'empanadas',
        stock: 22},           
    ]


    const clearAllDocsInCollection = (collection) => {
        let db = dataBase
        let docsId
        db.collection(`${collection}`).get()
            .then((querySnapshot) => {
                if(!querySnapshot.size > 0) {
                    console.log(`No hay ${collection} para borrar`)                    
                }
                else {
                    console.log('querySnapshot.doc: ', querySnapshot.docs)
                    docsId = querySnapshot.docs.map(doc => doc.id); console.log('docsId', docsId)
                    docsId.map(docId => db.collection(`${collection}`).doc(docId).delete().then(() => console.log(`Se borro la ${collection}: `, docId)).catch((error) => console.log(`Hubo un error borrando ${collection}: `, error)))
                }
            })
            .catch((error) => console.log(`Hubo un error borrando las ${collection}: `, error))
    }

    const verCargados = (collection) => {
        let db =dataBase
        db.collection(collection).get()
            .then((querySnapshot) => {
                if(querySnapshot.size > 0) {
                    console.log(`${collection}: `, querySnapshot.docs.map(doc => ( { id: doc.id, ...doc.data() })))
                }
                else {
                    console.log('No hubo resultados para este pedido al servidor..')
                    console.log('docsId: ', querySnapshot.docs.map(doc => doc.id));
                }
            })
            .catch((error) => {
                console.log(`Hubo un error al procesar el pedido al servidor`, error)
        })        
    }

    const cargarProducts = () => {
        let db = dataBase
        productos.map((item) => {
            db.collection('products').add(item)
                .then((doc) => {
                    let docId = doc.id           
                    db.collection('products').doc(docId).get()
                        .then((doc) => console.log(`Se agrego el producto: ${doc.id}`, {...doc.data()}.title))                .catch((error) => console.log('Hubo un error subiendo los productos: ', error))
                })
                .catch((error) => console.log('Hubo un error cargando los productos al servidor: ', error))
        })
    }





    return(
        <div>
            <div>
                <button className='btn' onClick={() => clearAllDocsInCollection('orders')}>Borrar todas las orders</button>
            </div>
            <div>
                <button className='btn' onClick={() => verCargados('orders')}>Ver order vigentes</button>
            </div>            
            <div>
            <button className='btn' onClick={cargarProducts}>Cargar productos</button>
            </div>
            <div>
            <button className='btn' onClick={() => verCargados('products')}>Ver productos cargados</button>
            </div>
            <div>
            <button className='btn' onClick={() => clearAllDocsInCollection('products')}>Borrar tods los productos cargados</button>
            </div>
        </div>

    )
}

export { Privado }