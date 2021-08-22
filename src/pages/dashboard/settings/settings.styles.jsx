import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 80%;
  width: 100%;
  overflow: auto;
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

export const CustomTextField = styled.div`
  padding: 0 1rem;
  height: 3rem;
  background-color: #f6f9f9;
  width: 51.5%;
  border: none;
  margin-bottom: 1rem;
  border-radius: 7px;
  display: flex;
  align-items: center;
`;
export const DualTextForm = styled.div`
  display: flex;
`;

export const TextFieldContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const CustomInput = styled.input`
  border: none;
  background: rgba(0, 0, 0, 0);

  font-weight: bold;
  margin-left: 0.5rem;
  width: 100%;
  height: 3rem;
  &:focus {
    outline: 0;
  }
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: 3rem;
  margin-top: 3rem;
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
`;

export const APIContainer = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const Vertical = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorContainer = styled.div`
  color: #dc3545;
  font-size: 0.75rem;

  font-weight: bold;
`;
export const CustomInputContainer = styled.div`
  padding: 0 1rem;

  height: 3rem;
  background-color: #f6f9f9;
  border: none;
  margin-bottom: 1rem;
  border-radius: 7px;
  display: flex;
  align-items: center;
`;

const isTabActive = ({ isActive }) => {
  if (!isActive) {
    return css`
      transition: all 0.5s ease;

      color: #a4a6b5;
    `;
  }
};

export const TabHeader = styled.h2`
  font-family: Gilroy;
  font-weight: bold;
  color: #000;
  font-size: 1.3rem;
  letter-spacing: 1px;
  margin-bottom: 2rem;
  margin-right: 1rem;
  cursor: pointer;
  ${isTabActive}
`;
