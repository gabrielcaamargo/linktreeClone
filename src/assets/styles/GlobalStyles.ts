import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', Arial, sans-serif;
  }

  body {
    max-width: 768px;
    margin: auto;
    text-align: center;
  }
`;
