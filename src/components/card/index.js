import React from 'react';
import { Container, Text, Image, Title, Tagline, ABV, IBU, Content, ContentTitle, ContentTagline, ContentDescription, Icon, Wrapper, Button } from './styles/card'


export default function Card({ children, ...restProps }) {
    return (
            <Container {...restProps}>{children}</Container>
    )
}
Card.Wrapper = function CardWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Card.Tagline = function CardTagline({ children, ...restProps }) {
    return <Tagline {...restProps}>{children}</Tagline>
}

Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Card.Image = function CardImage({ children, ...restProps }) {
    return <Image {...restProps} />
}

Card.ABV = function CardABV({ children, ...restProps }) {
    return <ABV {...restProps}>{children}</ABV>
}

Card.IBU = function CardABV({ children, ...restProps }) {
    return <IBU {...restProps}>{children}</IBU>
}

Card.Content = function CardContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>
}

Card.ContentTitle = function CardContentTitle({ children, ...restProps }) {
    return <ContentTitle {...restProps}>{children}</ContentTitle>
}
Card.ContentTagline = function CardContentTagline({ children, ...restProps }) {
    return <ContentTagline {...restProps}>{children}</ContentTagline>
}

Card.ContentDescription = function CardContentDescription({ children, ...restProps }) {
    return <ContentDescription {...restProps}>{children}</ContentDescription>
}

Card.Icon = function CardIcon({ ...restProps }) {
    return <Icon {...restProps} />
}


Card.Button = function CardButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}
