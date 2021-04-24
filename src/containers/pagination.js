import React from 'react'
import { Pagination } from '../components/exports'

export function PaginationContainer({ page, setPage, items }) {

    const handleNextPage = () => {
        setPage(prev => prev + 1)
    }

    const handlePrevPage = () => {
        setPage(prev => prev - 1)
    }

    return (
        <Pagination>
            <Pagination.Buttons onClick={handlePrevPage} disabled={page === 1 ? true : false}> prev </Pagination.Buttons>
            <Pagination.Page>{page}</Pagination.Page>
            <Pagination.Buttons onClick={handleNextPage} disabled={items.length < 15 ? true : false}> next </Pagination.Buttons>
        </Pagination>
    )
}