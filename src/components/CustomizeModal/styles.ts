import styled from "styled-components";

export const Overlay = styled.div`
  backdrop-filter: blur(8px);
  background-color: rgba(30, 30, 30, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background-color: #303030;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  width: 600px;
  display: flex;


  h1 {
    font-size: 32px;
  }

  input {
    width: 100%;
  }

  div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    gap: 8px;

    button {
      height: 40px;
      width: fit-content;
      cursor: pointer;

      &:first-child {
        background: #F51000;
        color: #FFF;
        transition: all 0.2s ease-in-out;


        &:active {
          filter: brightness(1.2);
        }

        &:hover {
          background-color: #870900;
        }
      }
    }
  }

`;
