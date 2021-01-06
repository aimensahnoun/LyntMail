import styled, { css } from "styled-components";

const toggleIsOpen = (props) => {
  if (props.isOpen) {
    return css`
      border-radius: 15px 15px 0 0;
    `;
  } else {
    return css`
      border-radius: 15px;
    `;
  }
};

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f1f1f5;
  height: 2rem;
  width: 4.8rem;
  padding: 0 0.75rem;
  font-weight: bold;
  border-radius: 15px;
  color: #414062;
  cursor: pointer;
  font-size: 0.2rem;
  ${toggleIsOpen}
`;
export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  background-color: #f1f1f5;
  width: 6.3rem;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 0 0 15px 15px;
  color: #414062;
  cursor: pointer;
  position: absolute;
  z-index: 1;
`;
