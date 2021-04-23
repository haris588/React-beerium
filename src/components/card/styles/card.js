import styled from 'styled-components'

export const Container = styled.div`
   display: grid;
   grid-template-columns: ${({ gridType }) => (gridType === 'list' ? 'repeat(auto-fill, minmax(300px, 1fr))' : '200px 2fr')};
   grid-gap: 15px;
   padding: 1em;
   margin: 0 auto;
`

export const Wrapper = styled.div`
   display: ${({ display }) => (display === 'block' ? 'block' : 'flex')};
   position: relative;
   flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
   justify-content: ${({ justifyContent }) => (justifyContent === 'end' ? 'flex-end' : 'space-evenly')};
   border: ${({ border }) => (border === 'false' ? 'none' : '1px solid #e3dede')};
   border-radius: 15px;
   background:#fdf9f9;
   padding: 1em;
   text-align: ${({ textAlign }) => (textAlign === 'left' ? 'left' : 'center')};
   font-size: 1rem};

   @media(max-width: 920px){
      font-size:0.8rem;
   }
`
export const Text = styled.p`
   padding: 0.5em;
`

export const Image = styled.img`
   max-width: 100%;
   height: 200px;
   object-fit: contain;
   margin: 3em 0 1em 0;

   @media(max-width: 720px){
      height: 150px;
   }
`

export const Title = styled.h2`
   font-size: 1.2rem;
   padding: 0.5em;

   @media(max-width: 920px){
      font-size: 1rem;
   }
`

export const Tagline = styled.p`
   font-style: italic;
   padding: 0.5em;
`

export const ABV = styled.span`
   position: ${({ position }) => (position === 'relative' ? 'relative' : 'absolute')};
   color: #e1004f;
   left:0;
   top:0;
   padding:0.5em;
   font-weight: 700;
`
export const IBU = styled.span`
   position: ${({ position }) => (position === 'relative' ? 'relative' : 'absolute')};
   color: #1bc700;
   padding:0.5em;
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
   background: #dfdcdd;
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
   padding: 0.5em;
`

export const ContentTagline = styled.p`
   padding: 0.5em;
   font-style: italic;
`
export const ContentDescription = styled.p`
   padding: 0.5em;
`

export const Icon = styled.img`
   width: 30px;
   height: 30px;
   position: absolute;
   bottom: 2em;
   right: 2em;
`

export const Button = styled.button`
   display:block;
   padding: 1em 2.5em;
   background: ${({ color }) => (color === 'red' ? '#e1004f' : '#1bc700')};
   margin-left:2em;
   font-family:inherit;
   text-transform: uppercase;
   font-weight: 700;
   color: rgba(255,255,255, 0.9);
   border:0;
   border-radius: 15px;

   @media (max-width: 920px){
      font-size:0.8rem;
      padding: 0.8em 2.1em;
   }
`
