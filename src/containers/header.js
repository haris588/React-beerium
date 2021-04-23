import React, { useContext } from 'react'
import { Header } from '../components/exports'
import { Context } from '../context/context'

export function HeaderContainer() {

    const { cartItems } = useContext(Context)

    return (
        <Header>
            <Header.Group>
                <Header.Title src="/images/logo.png" alt="">beerium</Header.Title>
            </Header.Group>

            <Header.Group>
                <Header.Button to="/">
                    Store
                </Header.Button>
                <Header.Button to="/cart">
                    Cart    <Header.Text>{cartItems.length > 0 ? `(${cartItems.length})` : null}</Header.Text>
                </Header.Button>
                
            </Header.Group>
        </Header>
    )
}