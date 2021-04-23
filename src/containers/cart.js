import React, { useContext } from 'react'
import { Card } from '../components/exports'
import { Context } from '../context/context'

export function CartContainer({ cartItems, removeFromCart, emptyCart }) {
    const { checkout, loading } = useContext(Context)


    return cartItems.length === 0 ? (<Card><Card.Text>Your cart is empty.</Card.Text></Card>) : (
        <>
            {loading ? <Card><Card.Title>Loading...</Card.Title></Card> : cartItems.map(item => {
                return (
                    <Card key={item.id}>
                        <Card.Wrapper >
                            <Card.Image src={item.image_url ? item.image_url : "./images/placeholder.png"} />
                        </Card.Wrapper>
                        <Card.Wrapper textAlign="left" >
                            <Card.Title>
                                {item.name}
                            </Card.Title>
                            <Card.Tagline>
                                {item.tagline}
                            </Card.Tagline>
                            <Card.Text>
                                Food pairing: {item.food_pairing.join(', ')}
                            </Card.Text>
                            <Card.ABV position='relative'>ABV: {item.abv}%</Card.ABV>
                            <Card.IBU position='relative'>IBU: {item.ibu}</Card.IBU>
                            <Card.Icon src="./images/remove.png" onClick={() => removeFromCart(item.id)} />
                        </Card.Wrapper>
                    </Card>
                )
            })}

            {cartItems.length >= 1 ?

                <Card.Wrapper flexDirection="row" justifyContent='end' border='false'>
                    <Card.Button onClick={emptyCart} color='red'>
                        empty cart
                    </Card.Button>
                    <Card.Button onClick={checkout}>
                        checkout
                    </Card.Button>
                </Card.Wrapper>

                : null}


        </>
    )
}
