import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 10vh;

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
  display: flex;
  align-items: center;
  margin: 0 5rem;
`;

export const Pages = styled.h5`
  margin: 0 0.5rem;
`;

export const Buttons = styled.div`
  margin-left: auto;
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
`;
