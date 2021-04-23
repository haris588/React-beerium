import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    font-size:0.9rem;
    font-weight:700;

    @media (max-width: 1000px){
        display:flex;
        flex-wrap:wrap;
    }
`
export const Form = styled.form`
    display:flex;
    justify-content:space-between;
    width:599px;
    align-items:center;
    position:relative;
    padding:1em;

    @media (max-width: 920px){
        font-size:0.8rem;
    }
`
export const Label = styled.label`
    font-size:0.8rem;
`

export const Input = styled.input`
    width:20px;
    height:20px;

    @media (max-width: 920px){
        width:15px;
        height:15px;
}
`
export const Text = styled.p`
    color:${({ color }) => (color === 'red' ? '#e1004f' : '#1bc700')};
    font-size:0.9rem;
`
