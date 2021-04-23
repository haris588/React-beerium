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
    font-size:1rem;

    @media (max-width: 920px){
        font-size:0.8rem;
    }
`
export const Label = styled.label`
    font-size:0.9rem;
`

export const Input = styled.input`
    width:25px;
    height:35px;

    @media (max-width: 920px){
        width:15px;
        height:20px;
}
`
export const Text = styled.p`
    color:${({ color }) => (color === 'red' ? 'red' : 'green')};
    font-size:1rem;
`
