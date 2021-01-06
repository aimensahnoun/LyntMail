import styled from "styled-components";

export const Container = styled.div`
  height: 80%;
  width: 100%;
  border-radius: 13px;
  background-color: #fff;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.006),
    0 100px 80px rgba(0, 0, 0, 0.02);
  padding: 0.4rem 1rem;
  @media screen and (max-width: 800px) {
    width: 95%;
  }
`;
