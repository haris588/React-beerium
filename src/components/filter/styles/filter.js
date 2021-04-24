import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    padding:0.8em;
    font-weight:700;
    background: #3F4269;
    color:rgba(255,255,255,0.8);
    justify-content:space-evenly;
    border-bottom: 2px solid #fff;
    @media (max-width: 920px){
        display:flex;
        flex-wrap:wrap;
        font-size:0.7rem;
    }
`
export const Form = styled.form`
    display:flex;
    position:relative;
    padding:0.8em;
    align-items:center;
  
`
export const Label = styled.label`
    padding:0.5em;
 
`

export const Input = styled.input`
    width:20px;
    height:20px;
    &:hover {
        transform: scale(1.2)
    }
   
    @media (max-width: 620px){
        width:15px;
        height:15px;
}
`
export const Text = styled.p`
    color:${({ color }) => (color === 'red' ? '#ff8101' : '#FFC95C')};
    margin-right:1.5em;
`
