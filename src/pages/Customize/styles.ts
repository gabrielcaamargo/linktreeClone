import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 48px;
  gap: 24px;

  button {
    height: 600px;
    width: 380px;
    cursor: default;

    &:hover {
      transform: scale(1);
    }

    @media screen and (max-height: 768px) {
      height: 450px;
      width: 280px;
    }
  }

  .finish {
    width: 380px;
    height: 40px;
    a {
      text-decoration: none;
      color: inherit;
    }

    @media screen and (max-height: 768px) {
      width: 280px;
    }
  }
`;

export const TemplateWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const UserTemplateContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 1fr 3fr;
  align-items: center;

`;

export const UserArea = styled.div`
  overflow: hidden;

  img {
    border-radius: 50%;
    padding: 4px;
    border: 3px dashed #CCC;
  }

  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 80%;
    margin: auto;
    border-radius: 12px;
    background-color: #CCC;
    margin-top: 8px;
  }

`;

export const StyleTemplate = styled.div`
  h2 {
    margin-bottom: 24px;
  }

  button {
    height: 40px;
    width: 80%;
    cursor: pointer;
    margin-bottom: 8px;
  }
`;

export const UserLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    height: 40px;
    width: 80%;
    cursor: pointer;
    margin-bottom: 8px;

    background-color: #EEE;
    border-radius: 8px;
    font-weight: bold;
    color: #1C1C1C;
    font-size: 16px;
    transition: all .2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }

    &:active {
      filter: brightness(1.2);
    }

    &:last-of-type{
      border: 3px dashed #CCC;
      background-color: #EEE;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  margin: auto;
  height: 40px;
  width: 80%;
  cursor: pointer;
  margin-bottom: 8px;

  background-color: #CCC;
  border-radius: 8px;
  font-weight: bold;
  color: #1C1C1C;
  font-size: 16px;
  transition: all .2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    filter: brightness(1.2);
  }
`;

