import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 768px;
`;

export const TemplateContainer = styled.div`
  margin-top: 72px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`;
