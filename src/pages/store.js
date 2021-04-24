import React, { useState, useEffect } from "react"
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { FilterContainer } from '../containers/filter'
import { CardContainer } from '../containers/card'
import { PaginationContainer } from "../containers/pagination"

export function Store() {
    const [beers, setBeers] = useState([])
    const [optionsABV, setOptionsABV] = useState("")
    const [optionsIBU, setOptionsIBU] = useState("")
    const [page, setPage] = useState(1);

    useEffect(() => {
        getBeers()
    }, [page, optionsABV, optionsIBU])

    const getBeers = async () => {
        let API_URL = `https://api.punkapi.com/v2/beers?page=${page}&per_page=15${optionsABV}${optionsIBU}`
        try {
            const promise = await fetch(API_URL);
            const beersData = await promise.json();
            setBeers(beersData)
        }
        catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <HeaderContainer />
            <FilterContainer
                getBeers={getBeers}
                setPage={setPage}
                optionsIBU={optionsIBU}
                optionsABV={optionsABV}
                setOptionsABV={setOptionsABV}
                setOptionsIBU={setOptionsIBU} />
            <CardContainer items={beers} />
            <PaginationContainer page={page} setPage={setPage} items={beers} />
            <FooterContainer />
        </>
    )
}
