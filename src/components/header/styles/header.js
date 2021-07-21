import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
    display:flex;
    justify-content: space-between;
    padding:1em;
    align-items:center;
    color:#fff;
    background: #332f2f;
    border-radius:7px;
    margin-bottom: 1em;
    font-size:1rem;
`
export const Group = styled.div`      
    display:flex;
    align-items: center;
    padding:0.5em;
`

export const Title = styled.h1`
    font-size:2rem;
    text-transform: uppercase;

    @media (max-width: 720px){
        font-size:0.9rem;
    }
`

export const Text = styled.p`
   color: #e11005;
`
export const Button = styled(Link)`   
    display:flex; 
    position: relative;
    font-weight:700;
    border: 0;
    border-radius:15px;
    color:#fff;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    margin-left:1em;

    &:hover {
        transform: scale(1.2);
    }

    @media (max-width:600px){
        padding: 4px 8px;
        font-size:0.9rem;
    }
`


