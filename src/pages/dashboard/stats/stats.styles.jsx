import styled from "styled-components";

export const StatBoxContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  width: 100%;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;
