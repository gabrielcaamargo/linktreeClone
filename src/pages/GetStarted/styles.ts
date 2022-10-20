import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 768px;

  h1 {
    font-size: 36px;
  }

  span {
    color: ${({theme}) => theme.colors.main} ;
  }

  input {
    margin-top: 32px;
  }

  button {
    margin-top: 16px;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;
