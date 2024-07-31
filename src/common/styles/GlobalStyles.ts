import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select:none ;

        @media (prefers-reduced-motion: reduce) {
            animation: unset;
            transition: unset;
        }
    }

    * {
        scrollbar-width: thin;
        scrollbar-color: #222222 white;
    }

    *::-webkit-scrollbar {
        height: 10px;
    }

    *::-webkit-scrollbar-track {
        background-color: #E5E9ED;

    }

    *::-webkit-scrollbar-track-piece {
        background-color: #F9F9F9;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #222222;
        border-radius: 10px;
    }

    body {
        min-width: 375px;
        margin: 0;
        font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.darkMode.backgroundBody};
        color: ${theme.darkMode.color.text};
    }

    a {
        text-decoration: none;
        color:${theme.darkMode.color.text};
     
        
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;

    }

`;
