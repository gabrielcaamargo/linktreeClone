import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    max-width: 768px;
    margin: auto;
    text-align: center;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.textColor};
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
  }

  span {
    color: ${({theme}) => theme.colors.main} ;
  }

  h1 {
    font-size: 36px;
  }
`;
