import styled from "styled-components";

export const Button = styled.button`
  width: 80%;
  border: none;
  outline: none;
  background-color: ${({theme}) => theme.colors.main};
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  padding: 8px 16px;

  transition: all 0.2s ease-in;

  text-align: center;

  filter: drop-shadow(0px 4px 4px rgba(31,31,31,0.4));

  &:hover {
    background-color: ${({theme}) => theme.colors.dark};
  }

  &:active {
    background-color: ${({theme}) => theme.colors.light};
  }

  &[disabled] {
    background-color: #BBB;
    color: #333;
    cursor: default;
  }
`;
