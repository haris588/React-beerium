import React from 'react'
import { Container, Form, Label, Input, Text } from './styles/filter'

export default function Filter({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Filter.Form = function FilterForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>
}

Filter.Label = function FormLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}

Filter.Input = function FormInput({ ...restProps }) {
    return <Input {...restProps}/>
}

Filter.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}


