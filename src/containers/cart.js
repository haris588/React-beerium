import React, { useContext } from 'react'
import { Card } from '../components/exports'
import { Context } from '../context/context'

export function CartContainer({ cartItems, removeFromCart, emptyCart }) {
    const { checkout, loading } = useContext(Context)


    return cartItems.length === 0 ? (<Card><Card.Text style={{color: '#FFF'}}>Your cart is empty.</Card.Text></Card>) : (
        <>
            {loading ? <Card><Card.Title style={{color: '#FFF'}}>Loading...</Card.Title></Card> : cartItems.map(item => {
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

                <div style={{display: 'flex', justifyContent: 'flex-end', background:'#1174a6', padding: '0 1em 1em 1em'}}>
                    <Card.Button onClick={emptyCart} color='red'>
                        empty cart
                    </Card.Button>
                    <Card.Button onClick={checkout}>
                        checkout
                    </Card.Button>
                </div> 

                : null}


        </>
    )
}
