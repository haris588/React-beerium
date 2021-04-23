import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    font-size:0.9rem;
    font-weight:700;
    justify-content:space-between;
    @media (max-width: 920px){
        display:flex;
        flex-wrap:wrap;
    }
`
export const Form = styled.form`
    display:flex;
    position:relative;
    padding:1em;
    align-items:center;
    @media (max-width: 620px){
        font-size:0.8rem;
    }
`
export const Label = styled.label`
    font-size:0.8rem;
    padding:0.3em;
`

export const Input = styled.input`
    width:20px;
    height:20px;

    @media (max-width: 620px){
        width:15px;
        height:15px;
}
`
export const Text = styled.p`
    color:${({ color }) => (color === 'red' ? '#e1004f' : '#1bc700')};
    font-size:0.9rem;
`
