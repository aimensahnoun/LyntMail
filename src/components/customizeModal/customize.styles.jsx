import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 25rem;
  left: 50%;
  border-radius: 13px;
  top: 50%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  padding: 10px;
  &:focus {
    outline: 0;
  }
  @media screen and (max-width: 800px) {
    width: 22rem;
  } ;
`;

export const CustomTextField = styled.div`
  padding: 0 1rem;
  height: 3rem;
  background-color: #f6f9f9;
  width: 100%;
  border: none;
  margin-bottom: 1rem;
  border-radius: 7px;
  display: flex;
  align-items: center;
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

export const TypeDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Type = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.75rem;
  font-size: 1.5rem;
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;

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
