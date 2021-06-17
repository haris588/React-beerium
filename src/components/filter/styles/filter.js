import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    padding:1em;
    font-weight:700;
    background: #f4d986;
    color:#333;
    border-radius:7px;
    justify-content:space-evenly;
    margin: 1em 0;
    @media (max-width: 920px){
        display:flex;
        flex-wrap:wrap;
        font-size:0.8rem;
        justify-content:space-between;
    }
`
export const Form = styled.form`
    display:flex;
    justify-items: space-evenly;

    @media (max-width:920px){
        flex-direction:column;
    }
`
export const Label = styled.label`
display:flex;
align-items:center;
padding:0.2em 0.8em;
    text-transform: uppercase;
    font-size:0.8rem;
`

export const Input = styled.input`
    width:20px;
    height:20px;
    margin-right:1em;
    cursor: pointer;
    &:hover {
        transform: scale(1.2)
    }
   
    @media (max-width: 620px){
        width:15px;
        height:15px;
}
`
export const Text = styled.p`
padding:0.2em 0.8em;
font-weight: 700;
    color:${({ color }) => (color === 'red' ? '#e11005' : '#01a314')};
`
