import React, { useState, createContext } from 'react'

export const Context = createContext()

export function ContextProvider({ children }) {

    const [cartItems, setCartItems] = useState([])
    const [loading, setLoading] = useState(false)

    const addToCart = (item) => {
        setCartItems(prev => [...prev, item])
    }

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    const emptyCart = () => {
        setCartItems([])
    }

    const checkout = () => {
        setLoading(true)
        setTimeout(() => {
            emptyCart()
            setLoading(false)
        }, 3000)
    }

    return (
        <Context.Provider value={{
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart,
            emptyCart,
            checkout,
            loading
        }}>
            {children}
        </Context.Provider>
    )
}