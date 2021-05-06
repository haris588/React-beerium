import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    padding:1em;
    font-weight:700;
    background: #323232;
    color:rgba(255,255,255,0.9);
    justify-content:space-evenly;
    border-bottom: 2px solid #fff;
    
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
    color:${({ color }) => (color === 'red' ? '#f44f26' : '#42e733')};
`
