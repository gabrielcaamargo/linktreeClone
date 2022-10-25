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
  gap: 8px;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 32px;
  }

  .template-area {
    button {
    height: 220px;
    width: 160px;
    cursor: default;

    :hover {
      transform: scale(1);
    }
  }
  }

  .button-area {
    display: flex;
    gap: 12px;
    width: 100%;
    justify-content: flex-end;
    margin-top: 24px;

    button {
      font-weight: bold;
      background: none;
      cursor: pointer;
      font-size: 16px;
      color: #FFF;
      border-radius: 8px;
      padding: 8px 24px;
      transition: all 0.1s ease-in-out;

      a {
        text-decoration: none;
        color: inherit;
      }

      &:first-child {
        background-color: #F51000;
      }

      &:not(:first-child) {
        background-color: ${({theme}) => theme.colors.main};
      }

      &:hover {
        filter: brightness(0.6);
      }

      &:active {
        filter: brightness(1.4);
      }
    }
  }
`;
