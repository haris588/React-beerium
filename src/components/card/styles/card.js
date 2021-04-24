import styled from 'styled-components'

export const Container = styled.div`
   display: grid;
   grid-template-columns: ${({ gridType }) => (gridType === 'list' ? 'repeat(auto-fill, minmax(300px, 1fr))' : '200px 1fr')};
   grid-gap: 8px;
   padding: 1em;
   color:rgba(255,255,255, 0.8);
   background: #3F4269;
   @media(max-width: 620px){
      grid-template-columns: ${({ gridType }) => (gridType === 'list' ? 'repeat(auto-fill, minmax(300px, 1fr))' : '40% 1fr')};
   }
`

export const Wrapper = styled.div`
   display: ${({ display }) => (display === 'block' ? 'block' : 'flex')};
   position: relative;
   flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
   justify-content: ${({ justifyContent }) => (justifyContent === 'end' ? 'flex-end' : 'space-evenly')};
   border: ${({ border }) => (border === 'false' ? 'none' : '1px solid #fff')};
   border-radius: 15px;
   background:#525478;
   padding: 1em;
   text-align: ${({ textAlign }) => (textAlign === 'left' ? 'left' : 'center')};
   font-size: 1rem;

   @media(max-width: 620px){
      font-size:0.8rem;
   }
`
export const Text = styled.p`
   padding: 0.5em;
   font-size:0.9rem;
   color:#fff;
`

export const Image = styled.img`
   max-width: 100%;
   height: 200px;
   object-fit: contain;
   margin: 3em 0 1em 0;

   @media(max-width: 620px){
      height: 150px;
   }
`

export const Title = styled.h2`
   font-size: 1.2rem;
   padding: 0.5em;

   @media(max-width: 620px){
      font-size: 1rem;
   }
`

export const Tagline = styled.p`
   font-style: italic;
   padding: 0.5em;
`

export const ABV = styled.span`
   position: ${({ position }) => (position === 'relative' ? 'relative' : 'absolute')};
   color: #ff8101;
   left:0;
   top:0;
   padding:1em;
   font-weight: 700;
`
export const IBU = styled.span`
   position: ${({ position }) => (position === 'relative' ? 'relative' : 'absolute')};
   color: #FFC95C;
   padding:1em;
   right:0;
   top:0;
   font-weight: 700;
`

export const Content = styled.div`
   position: ${({ position }) => (position === 'relative' ? 'relative' : 'absolute')};;
   top: 0;
   left: 0;
   padding: 1em;
   width: 100%;
   height: 100%;
   background: #9798ae;
   color; color:rgba(255,255,255, 1);
   overflow: auto;
   cursor: pointer;
   border-radius: 13px;
   text-align: left;
   opacity: 0;
   transition: opacity .8s ease;
      
         &: hover {
      opacity: 0.92;
   }

`

export const ContentTitle = styled.h2`
   padding: 0.5em 1em 0.5em 0.5em;
`

export const ContentTagline = styled.p`
   padding: 0.5em;
   font-style: italic;
`
export const ContentDescription = styled.p`
   padding: 0.5em;
`

export const Icon = styled.img`
   width: 40px;
   height: 40px;
   position: absolute;
   right:1em;
   top:1em;
   cursor:pointer;
   z-index:1000;

`

export const Button = styled.button`
   display:block;
   padding: 1em 2.5em;
   background: ${({ color }) => (color === 'red' ? '#a7a79e' : '#7da705')};
   margin-left:1em;
   font-family:inherit;
   text-transform: uppercase;
   font-weight: 700;
   cursor:pointer;
   color: #fff;
   border:0;
   border-radius: 15px;
   
   &:hover {
      transform: scale(1.1)
   }
   @media (max-width: 620px){
      font-size:0.8rem;
      padding: 0.8em 1.5em;
   }
`
