import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    padding: 1em;
    color: #525478;
   
`

export const Page = styled.span`
    padding:1em;
    font-weight: 700;
`

export const Buttons = styled.button`
display:inline-block;
    background: #323232;
    border:0;
    border-radius:5px;
    padding:0.5em 1em;
    font-family:inherit;
    color: rgba(255,255,255, 0.8);
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
        transform: scale(1.1)
    }

    &:disabled {
        opacity: 0.2;
        transform: scale(1)
    }
`
