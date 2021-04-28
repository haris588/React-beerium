import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    * {
        margin 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        color: #333;
        background: #fff;
        font-size: 16px;
        margin: 0 auto;
        padding:0;
        max-width:1200px;
        letter-spacing:1px;
    }

    
`;