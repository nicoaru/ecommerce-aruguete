import React, { createContext, useState} from 'react'

export const CartContext = createContext()
//hay que exportarlo//


function CartProvider ({ children}) {


    // ESTADO  -->  cart
    const [cart, setCart] = useState([])

    // FUNCIONES COMPLEMENTARIAS  addItem
    const isInCart = (itemId) => {
        return cart.some(obj => obj.item.id === itemId)
    }

    const addAlreadyInCart = (itemId, amountToAdd) => {
        let updatedCart = [...cart]
        updatedCart.forEach(obj => (obj.item.id == itemId) && (obj.quantity = obj.quantity + amountToAdd))
        setCart(updatedCart)
        console.log('Ahora el carrito tiene', updatedCart)
    }
        //FUNCION alreadyInCart() QUE NO HACE RE RENDER AUTOMATICO
        // const addAlreadyInCart = (itemId, amountToAdd) => {
        //     let updatedCart = cart
        //     updatedCart.forEach(obj => (obj.item.id == itemId) && (obj.quantity = obj.quantity + amountToAdd))
        //     setCart(updatedCart)
        //     console.log('Ahora el carrito tiene', updatedCart)
        // }
        // OTRA FUNCION alreadyInCart() QUE NO HACE RE RENDER AUTOMATICO
        // const addAlreadyInCart = (itemId, amountToAdd) => {
        //     let itemIndex = cart.findIndex(obj => obj.item.id === itemId)
        //     let updatedCart = cart
        //     updatedCart[itemIndex].quantity = updatedCart[itemIndex].quantity + amountToAdd
        //     setCart(updatedCart)
        //     console.log('Ahora el carrito tiene', updatedCart)
        // }

    const addNewInCart = (itemToAdd) => {
        let updatedCart = [...cart, itemToAdd]
        setCart(updatedCart)
        console.log('Ahora el carrito tiene', updatedCart)  
    }

    // METODOS
    const addItem = (item, quantity) => {
        isInCart(item.id) ? 
        addAlreadyInCart(item.id, quantity) :  
        addNewInCart({item: item, quantity: quantity})
        
        console.log('Is in cart?')
        console.log(isInCart(item.id))
        // alert(`Se agregaron ${quantity} ${item.title} al carrito`)
        // console.log(`Ahora el carrito tiene`, cart)
    }

    const removeItem = (itemId) => {
        const updatedCart = cart.filter( obj => obj.item.id !== itemId)
        setCart(updatedCart)
    }
        // FUNCION removeItem() QUE NO HACE RE RENDER AUTOMATICO
        // const removeItem = (itemId) => {
        //      let itemIndex = cart.findIndex(obj => obj.item.id === itemId)
        //      let updatedCart = cart
        //      updatedCart.splice(itemIndex, 1)
        //      setCart(updatedCart)
        //      console.log(`Ahora el carrito tiene`)
        //      console.log(cart)
        // }        

    const clear = () => {
        let updatedCart = []
        setCart(updatedCart)
        console.log('Ahora el carrito tiene', updatedCart)
    }
    //  FUNCION clear() QUE NO HACE RE RENDER AUTOMATICO
    //     const clear = () => {
    //          let updatedCart = cart
    //          updatedCart.splice(0)
    //          setCart(updatedCart)
    //          console.log('Ahora el carrito tiene', updatedCart)
    //     }

    return (
    <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
        {children}
    </CartContext.Provider>

    )

}

export { CartProvider }
