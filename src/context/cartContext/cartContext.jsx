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
        let itemIndex = cart.findIndex(obj => obj.item.id === itemId)
        let updatedCart = cart
        updatedCart[itemIndex].quantity = updatedCart[itemIndex].quantity + amountToAdd
        setCart(updatedCart)
    }
    const addNewInCart = (itemToAdd) => {
        setCart([...cart, itemToAdd])
    }

    // METODOS
    const addItem = (item, quantity) => {
        isInCart(item.id) ? 
        addAlreadyInCart(item.id, quantity) :  
        addNewInCart({item: item, quantity: quantity})
        
        alert(`Se agregaron ${quantity} ${item.title} al carrito`)
        console.log('Is in cart?')
        console.log(isInCart(item.id))
    }

    const removeItem = (itemId) => {
        let itemRemoveIndex = cart.findIndex(obj => obj.item.id === itemId)
        cart.splice(itemRemoveIndex, 1)
    }

    const clear = () => cart.splice(0)

    return (
    <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
        {children}
    </CartContext.Provider>

    )

}

export { CartProvider }
