import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 768px;

  gap: 24px;

  button {
    width: 380px;
    height: 600px;
    cursor: default;

    &:hover {
      transform: scale(1);
    }
  }
`;

export const TemplateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

export const UserTemplateContainer = styled.div`

`;

export const UserArea = styled.div`
  overflow: hidden;

  img {
    border-radius: 50%;
    padding: 4px;
    border: 3px dashed #CCC;
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

