import styled from "styled-components";

export const Container = styled.button`
  height: 260px;
  width: 180px;
  border-radius: 12px;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  filter: drop-shadow(0px 4px 8px rgba(31,31,31,0.4));
  transition: 0.2s ease-in-out all;

  &:hover {
    transform: scale(1.2);
  }
`;

export const TemplateLine = styled.div`
  width: 80%;
  height: 24px;
  background-color: #DDD;
  border-radius: 8px;
`;
