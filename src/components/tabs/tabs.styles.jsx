import styled, { css } from "styled-components";

function isActive(props) {
  if (props.isActive) {
    return css`
      background-color: #e86f52;
      color: #fff;
      -webkit-box-shadow: 0 0 5px 5px rgba(232, 95, 57, 0.3);
      -moz-box-shadow: 0 0 5px 5px rgba(232, 95, 57, 0.3);
      box-shadow: 0 0px 5px 5px rgba(232, 95, 57, 0.3);
      &:hover {
        background-color: #e86f52;
      }
    `;
  }
}

function isLogout(props) {
  if (props.isLogout) {
    return css`
      &:hover {
        background-color: rgba(220, 53, 69, 0.5);
      }
    `;
  }
}

export const TabsContainer = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  padding: 0.3rem 2rem;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Tab = styled.div`
  padding: 0 1.5rem;
  width: 100%;

  font-weight: bold;
  height: 2.5rem;
  border-radius: 20px 0 0 20px;
  margin: 0.2rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  color: #a4a6b5;
  cursor: pointer;
  margin-right: -5rem;
  &:hover {
    color: #fff;
    background-color: #f3b09d;
  }

  ${isActive}
  ${isLogout}
`;

export const Seperation = styled.hr`
  margin: 1.5rem -3rem;
  width: 11rem;
  border: none;
  height: 1px;
  color: #b5b4ba;
  background-color: #c6c5cb;
`;
