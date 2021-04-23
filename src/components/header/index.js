import React from 'react'
import { Container, Title, Group, Button, Text } from './styles/header'

export default function Header({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Header.Title = function HeaderTitle({children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Header.Text = function HeaderText({children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Header.Group = function HeaderGroup({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Header.Button = function HeaderButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}

