import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme['gray-100']};
        color:  ${({ theme }) => theme['gray-700']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    a, ins {
        text-decoration: none;
    }

`
