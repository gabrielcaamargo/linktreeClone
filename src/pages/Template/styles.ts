import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const TemplateContainer = styled.div`
  margin-top: 72px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media screen and (max-height: 768px) {
    margin-top: 36px;
    gap: 16px;
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen (max-width: 600px) {
    grid-template-columns: 1fr
  }
`;
