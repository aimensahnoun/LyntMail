import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width:28vw;
  border-radius: 13px;
  padding: 0.4rem 1rem;
  margin: 2rem 0rem;
  
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.006),
    0 100px 80px rgba(0, 0, 0, 0.02);
  @media screen and (max-width: 800px) {
    width: 96%;
    height: 60vh;
    margin-bottom: 2rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f1f1f5;
  height: 2rem;
  padding: 0 0.75rem;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 15px;
  color: #414062;
  cursor: pointer;
`;

export const APIContainer = styled.div`
  display: flex;
`;

export const ChartContainer = styled.div`
  height: 100%;
`;
