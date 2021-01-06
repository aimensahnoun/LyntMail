import styled from "styled-components";

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 2rem;
  color: #e86f52;
  cursor: pointer;
  
`;

export const PageContainer = styled.div`
  margin: 1rem 5rem;
  @media screen and (max-width: 800px) {
    margin: 1rem 1rem;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 10rem;
  width: 40rem;
  left: 50%;
  border-radius: 13px;
  top: 30%;

  transform: translate(-50%, -50%);
`;
