import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
    display:flex;
    justify-content: space-between;
    padding:1em;
    align-items:center;
    color:rgba(255,255,255,1);
    background: #3F4269;
    border-bottom: 2px solid #fff;
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
   color: red;
`
export const Button = styled(Link)`   
    display:flex; 
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
        background: #9798ae;
        transform: scale(1.1);
    }

`


