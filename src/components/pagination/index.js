import React from 'react'
import { Container, Page, Buttons } from './styles/pagination'

export default function Pagination({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Pagination.Page = function PaginationPage({ children, ...restProps }) {
    return <Page {...restProps}>{children}</Page>
}


Pagination.Buttons = function PaginationButtons({ children, ...restProps }) {
    return <Buttons {...restProps}>{children}</Buttons>
}
