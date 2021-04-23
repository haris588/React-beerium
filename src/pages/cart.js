import React, { useContext } from "react"
import { HeaderContainer } from '../containers/header'
import { CartContainer } from '../containers/cart'
import { FooterContainer } from '../containers/footer'
import { Context } from '../context/context'


export function Cart() {
    const { cartItems, setCartItems, removeFromCart, emptyCart } = useContext(Context)
    return (
        <>
            <HeaderContainer />
            <CartContainer cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart} emptyCart={emptyCart} />
            <FooterContainer />
        </>
    )
}
