import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    padding: 1em;
    color: #332f2f;
    margin-top:1em;
   
`

export const Page = styled.span`
    padding:1em;
    font-weight: 700;
    color:#332f2f;
`

export const Buttons = styled.button`
    display:inline-block;
    background: #3c4b4d;
    border:0;
    border-radius:5px;
    padding:0.5em 1em;
    font-family:inherit;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        transform: scale(1.02)
    }

    &:disabled {
        opacity: 0.2;
        transform: scale(1);
        cursor: not-allowed;
    }
`
