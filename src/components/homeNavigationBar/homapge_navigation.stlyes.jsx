import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 10vh;

  background-repeat: no-repeat;
  background-attachment: cover;
  background-position: center;
  color: #fff;
  @media only screen and (max-width: 600px) {
    margin-bottom: 10vh;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 2rem;
  color: #e86f52;
  cursor: pointer;
`;

export const NavigatorContainer = styled.div`
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
    font-size: .75rem;
  }
`;
