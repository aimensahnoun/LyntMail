import styled, { css } from "styled-components";

function addMarginTop({ isMain }) {
  if (isMain) {
    return css`
      margin-top: -2rem;
    `;
  }
}

function stick({ isMobile }) {
  if (!isMobile) {
    return css`
      position: fixed;
      top: 0;
      width: 90vw;
      background-color: #f8f7f7;
      z-index: 100;
    `;
  }
}

export const MainHeroContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 82vh;
  padding-bottom: 3rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin-top: 14vh;
  }
`;

export const StepsContainer = styled.div`
  height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fcfcfc;
  padding: 0.5rem 0;
`;

export const HowItWorksContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f7f7;
  padding: 0.5rem 0;
  padding-bottom: 3rem;
`;

export const PricingContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fcfcfc;
  padding: 0.5rem 0;
  padding-bottom: 3rem;
`;

export const Footer = styled.div`
  background-color: #e86f52;
  width: 100vw;
  height: 25vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 43vw;
  @media only screen and (max-width: 600px) {
    width: 95vw;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const CustomButton = styled.a`
  display: flex;
  width: 8rem;
  height: 2rem;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  border: none;
  border-radius: 20px;
  background-color: #e86f52;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  user-select: none;
  &:focus {
    outline: 0;
  }
`;

export const StepContainer = styled.div`
  display: flex;
  width: 60vw;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  width: 65vw;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    width: 100vw;
    flex-direction: column;

    align-items: center;
  }
`;

export const HowContainer = styled.div`
  display: flex;
  width: 65vw;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    width: 90vw;
    align-items: center;
  }
`;

export const PriceTable = styled.div`
  width: 15vw;
  border-radius: 15px;
  color: #6d7490;
  padding: 0.75rem 2rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.006), 0 100px 80px rgba(0, 0, 0, 0.02);
  @media only screen and (max-width: 600px) {
    width: 60vw;
    margin-bottom: 3vh;
  }
`;

export const Feature = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const Page = styled.div`
  width: 100vw;
  height: 10vh;
  display: block;
  background-repeat: no-repeat;
  background-attachment: cover;
  background-position: center;
  color: #fff;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 2rem;
  color: #e86f52;
  cursor: pointer;
`;

export const NavigatorContainer = styled.div`
  ${stick}
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5rem;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const PagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin-left: auto;
  cursor: pointer;
  user-select: none;
  @media only screen and (max-width: 600px) {
    text-align: center;
    margin-left: 0;
  }
`;

export const Pages = styled.a`
  margin: 0 0.5rem;
  color: black;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #e86f52;
  }
`;

export const Buttons = styled.div`
  margin-left: auto;
  @media only screen and (max-width: 600px) {
    margin-top: 2vh;
    margin-left: 0;
  }
`;

export const SignInButton = styled.button`
  height: 2rem;
  width: 5rem;
  background-color: #fff;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: #000;
  cursor: pointer;
`;
export const SignUpButton = styled.button`
  height: 2rem;
  width: 8rem;
  background-color: #e86f52;
  color: #000;
  margin-left: 0.5rem;
  border-radius: 20px;
  border: none;

  font-weight: bold;
  color: #fff;
  cursor: pointer;
  -webkit-box-shadow: 0 0 5px 5px rgba(232, 95, 57, 0.3);
  -moz-box-shadow: 0 0 5px 5px rgba(232, 95, 57, 0.3);
  box-shadow: 0 0px 5px 5px rgba(232, 95, 57, 0.3);
  @media only screen and (max-width: 600px) {
    width: 5rem;
    font-size: 0.75rem;
  }
`;
