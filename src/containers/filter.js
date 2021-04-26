import React from 'react'
import { Filter } from '../components/exports'
import { filterVars } from '../util/filterVars'


export function FilterContainer({ getBeers, setPage, optionsIBU, optionsABV, setOptionsABV, setOptionsIBU }) {

    const handleABVChange = (e) => {
        e.preventDefault()
        const value = e.target.value;

        switch (value) {
            case 'all':
                setOptionsABV(filterVars.showAll)
                break
            case 'weak':
                setOptionsABV(filterVars.weakABV)
                break
            case 'medium':
                setOptionsABV(filterVars.mediumABV)
                break
            case 'strong':
                setOptionsABV(filterVars.strongABV)
                break
            default: break
        }

        setPage(1)
    }

    const handleIBUChange = (e) => {
        e.preventDefault()
        const value = e.target.value;

        switch (value) {
            case 'all':
                setOptionsIBU(filterVars.showAll)
                break
            case 'low':
                setOptionsIBU(filterVars.lowIBU)
                break
            case 'medium':
                setOptionsIBU(filterVars.mediumIBU)
                break
            case 'high':
                setOptionsIBU(filterVars.highIBU)
                break
            default: break
        }

        setPage(1)
    }

    return (
        <Filter>
            <Filter.Form>
                <Filter.Text color='red'>
                    Alcohol (ABV):
                </Filter.Text>
                <Filter.Label htmlFor="abvAll">
                    <Filter.Input type="radio" value="all" name="filter-abv" checked={optionsABV === filterVars.showAll} onChange={handleABVChange} />

                    all
                </Filter.Label>

                <Filter.Label htmlFor="abvWeak">
                    <Filter.Input type="radio" value="weak" name="filter-abv" checked={optionsABV === filterVars.weakABV} onChange={handleABVChange} />
                    weak
                </Filter.Label>

                <Filter.Label htmlFor="abvMedium">
                    <Filter.Input type="radio" value="medium" name="filter-abv" checked={optionsABV === filterVars.mediumABV} onChange={handleABVChange} />
                    medium
                </Filter.Label>

                <Filter.Label htmlFor="abvStrong">
                    <Filter.Input type="radio" value="strong" name="filter-abv" checked={optionsABV === filterVars.strongABV} onChange={handleABVChange} />
                    strong
                </Filter.Label>
            </Filter.Form>

            <Filter.Form>
                <Filter.Text>
                    Hoppiness (IBU):
                </Filter.Text>

                <Filter.Label htmlFor="ibuAll">
                    <Filter.Input type="radio" value="all" name="filter-ibu" checked={optionsIBU === filterVars.showAll} onChange={handleIBUChange} />
                        all
                </Filter.Label>

                <Filter.Label htmlFor="ibuLow">
                    <Filter.Input type="radio" value="low" name="filter-ibu" checked={optionsIBU === filterVars.lowIBU} onChange={handleIBUChange} />
                    low
                </Filter.Label>

                <Filter.Label htmlFor="ibuMedium">
                    <Filter.Input type="radio" value="medium" name="filter-ibu" checked={optionsIBU === filterVars.mediumIBU} onChange={handleIBUChange} />
                    medium
                </Filter.Label>

                <Filter.Label htmlFor="ibuHigh">
                    <Filter.Input type="radio" value="high" name="filter-ibu" checked={optionsIBU === filterVars.highIBU} onChange={handleIBUChange} />
                    high
                </Filter.Label>
            </Filter.Form>
        </Filter>

    )
}
