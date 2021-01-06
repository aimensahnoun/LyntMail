import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  position: absolute;
  height: 10rem;
  width: 40rem;
  left: 50%;
  border-radius: 13px;
  top: 30%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  padding: 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.006),
    0 100px 80px rgba(0, 0, 0, 0.02);

  @media screen and (max-width: 800px) {
    width: 85%;
  }
`;

export const Result = styled.h1`
  fontsize: "1.5rem";
  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
`;

export const Text = styled.h4`
  font-weight: bold;
  @media screen and (max-width: 800px) {
    font-size: 0.9rem;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SubmitContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  margin-left: auto;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    margin-top: auto;
  }
`;

export const Button = styled.button`
  display: block;

  width: 7rem;
  height: 2rem;
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
  @media screen and (max-width: 800px) {
    margin-left: 20%;
  }
`;
