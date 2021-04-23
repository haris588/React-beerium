import React from 'react'
import { Filter } from '../components/exports'
import { filterVars } from '../util/filterVars'


export function FilterContainer({ getBeers, setPage, optionsIBU, optionsABV, setOptionsABV, setOptionsIBU }) {

    const handleABVChange = (e) => {
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
        getBeers()
    }

    const handleIBUChange = (e) => {
        const value = e.target.value;

        switch (value) {
            case 'all':
                setOptionsIBU(filterVars.showAll)
                break
            case 'weak':
                setOptionsIBU(filterVars.weakIBU)
                break
            case 'medium':
                setOptionsIBU(filterVars.mediumIBU)
                break
            case 'strong':
                setOptionsIBU(filterVars.strongIBU)
                break
            default: break
        }

        setPage(1)
        getBeers()
    }

    return (
        <Filter>
            <Filter.Form>
                <Filter.Text color='red'>
                    Alcoholic Vol (ABV):
                </Filter.Text>

                <Filter.Input type="radio" value="all" name="filter-abv" checked={optionsABV === filterVars.showAll} onChange={handleABVChange} />
                <Filter.Label htmlFor="abvAll">
                    all
                    </Filter.Label>

                <Filter.Input type="radio" value="weak" name="filter-abv" checked={optionsABV === filterVars.weakABV} onChange={handleABVChange} />
                <Filter.Label htmlFor="abvWeak">
                    weak
                    </Filter.Label>

                <Filter.Input type="radio" value="medium" name="filter-abv" checked={optionsABV === filterVars.mediumABV} onChange={handleABVChange} />
                <Filter.Label htmlFor="abvMedium">
                    medium
                </Filter.Label>

                <Filter.Input type="radio" value="strong" name="filter-abv" checked={optionsABV === filterVars.strongABV} onChange={handleABVChange} />
                <Filter.Label htmlFor="abvStrong">
                    strong
                </Filter.Label>
            </Filter.Form>

            <Filter.Form>
                <Filter.Text>
                    Hoppiness (IBU):
                </Filter.Text>

                <Filter.Input type="radio" value="all" name="filter-ibu" checked={optionsIBU === filterVars.showAll} onChange={handleIBUChange} />
                <Filter.Label htmlFor="ibuAll">
                    all
                </Filter.Label>


                <Filter.Input type="radio" value="weak" name="filter-ibu" checked={optionsIBU === filterVars.weakIBU} onChange={handleIBUChange} />
                <Filter.Label htmlFor="ibuWeak">
                    weak
                </Filter.Label>


                <Filter.Input type="radio" value="medium" name="filter-ibu" checked={optionsIBU === filterVars.mediumIBU} onChange={handleIBUChange} />
                <Filter.Label htmlFor="ibuMedium">
                    medium
                </Filter.Label>


                <Filter.Input type="radio" value="strong" name="filter-ibu" checked={optionsIBU === filterVars.strongIBU} onChange={handleIBUChange} />
                <Filter.Label htmlFor="ibuStrong">
                    strong
                </Filter.Label>
            </Filter.Form>
        </Filter>

    )
}
