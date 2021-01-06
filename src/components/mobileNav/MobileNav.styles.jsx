import styled, { css } from "styled-components";

function isOpen({ isOpen }) {
  if (isOpen) {
    return css`
      height: 50vh;
      width: 114vw;
    `;
  } else {
    return css`
      height: 0;
      width: 0;
    `;
  }
}

function toggleButton({ isOpen }) {
  if (isOpen) {
    return css`
      color: #fff;
    `;
  }
}

function increaseSize({ isOpen }) {
  if (isOpen) {
    return css`
      font-size: 1.8rem;
    `;
  }
}

export const Div = styled.div`
  display: none;
  background-color: #f8f9fb;
  width: 112vw;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;
export const ButtonDiv = styled.div`
  &:nth-child(1) {
    position: relative;
    color: #e86f52;
    margin-left: 1rem;
    z-index: 5;
    ${toggleButton}
  }
`;

export const Container = styled.div`
  @media screen and (max-width: 800px) {
    position: relative;
    top: -2.95rem;
    left: -5px;
    height: 0vw;
    width: 0%;
    z-index: 3;
    margin-top: -1.4rem;
    background-color: #e86f52;
    transition: height 1s ease;

    ${isOpen}
  }
`;
export const ItemsDiv = styled.div`
  color: #fff;
  font-family: "Gilroy";
  text-align: center;
  font-size: 0.75rem;
  padding-top: 3rem;
`;

export const Item = styled.h3`
  transition: all 0.75s ease;
  margin-bottom: -1rem;
  font-size: 0;
  ${increaseSize}

`;
