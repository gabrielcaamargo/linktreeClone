import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

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

export const Subtitle = styled.h2`
  font-size: 26px;
  font-weight: 500;
`;
