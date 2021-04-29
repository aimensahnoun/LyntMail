import styled from "styled-components";

export const HowItWorksContainer = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 2vh;
  }
`;
