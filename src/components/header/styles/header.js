import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
    display:flex;
    justify-content: space-between;
    font-size:1rem;
    padding:1em;
    align-items:center;
    border-bottom: 2px solid rgba(0,0,0,0.2);
`
export const Group = styled.div`      
    margin:0;
    display:flex;
    align-items: center;
`

export const Title = styled.h1`
    font-size:2rem;
    text-transform: uppercase;
`

export const Text = styled.p`
   color: red;
`
export const Button = styled(Link)`    
    display: flex;
    background:#fdf9f9;
    font-weight:700;
    border: 0;
    color:rgba(0,0,0,0.8);
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
        background: #c9c9c9;
    }

`


