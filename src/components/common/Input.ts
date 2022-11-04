import styled from "styled-components";

export const Input = styled.input`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 16px;
  width: 80%;
  transition: all .2s ease-in-out;
  border: 2px solid transparent;

  &:focus {
    border: 2px solid ${({theme}) => theme.colors.main};
  }
`;
