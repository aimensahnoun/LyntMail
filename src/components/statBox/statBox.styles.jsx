import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  background-color: #fff;
  height: 5rem;
  min-width: 11rem;
  border-radius: 13px;
  padding: 0.4rem 1rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.006),
    0 100px 80px rgba(0, 0, 0, 0.02);
  @media screen and (max-width: 800px) {
    width: 9rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.5rem;
  @media screen and (max-width: 800px) {
    font-size: 0.43rem;
  }
`;

export const Icon = styled.div`
  font-size: 2rem;
  color: #e86f52;
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`;
