import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: #FAF3F2;
  }
  
  li {
    list-style: none;
  }
`;

export default GlobalStyle;
