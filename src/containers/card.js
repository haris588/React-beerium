import React, { useContext } from 'react'
import { Card } from '../components/exports'
import { Context } from '../context/context'

export function CardContainer({ items }) {
    const { cartItems, addToCart, removeFromCart } = useContext(Context)
    return (
        <Card gridType="list">
            {items.map(item => {
                return (
                    <Card.Wrapper key={item.id}>
                        <Card.ABV>ABV:{item.abv}%</Card.ABV>
                        <Card.IBU>IBU:{item.ibu}</Card.IBU>
                        <Card.Image src={item.image_url ? item.image_url : "./images/placeholder.png"}  alt="beer"/>
                        <Card.Title>
                            {item.name}
                        </Card.Title>
                        <Card.Tagline>
                            {item.tagline}
                        </Card.Tagline>
                        <Card.Content>
                            <Card.ContentTitle>
                                {item.name}
                            </Card.ContentTitle>
                            <Card.ContentTagline>
                                {item.tagline}
                            </Card.ContentTagline>
                            <Card.ContentDescription>
                                {item.description}
                            </Card.ContentDescription>
                            <Card.Text>
                                Food pairing: {item.food_pairing.join(', ')}
                            </Card.Text>

                            {cartItems.some(i => i.id === item.id) ? <Card.Icon src="./images/remove.png" alt="remove from cart" onClick={() => removeFromCart(item.id)} /> : <Card.Icon src="./images/cart.png" alt="add to cart" onClick={() => addToCart(item)} />}

                        </Card.Content>
                    </Card.Wrapper>
                )
            })}
        </Card>
    )
}
