import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: -1rem;
  padding: 0.4rem 0;
  &:hover {
    background-color: rgba(68, 68, 68, 0.05);
  }
`;

export const FieldBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 20%;
  @media screen and (max-width: 800px) {
    width: 25%;
  }

  &:nth-child(2) {
    width: 10%;
    @media screen and (max-width: 800px) {
      width: 15%;
    }
  }
  &:nth-child(3) {
    width: 30%;
    @media screen and (max-width: 800px) {
      width: 35%;
    }
    color: #666;
    display: flex;
    align-items: center;
  }
`;

function isDetele(props) {
  if (props.isDelete) {
    return css`
      background-color: #dc3545;
    `;
  }
}

export const LinkButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  &:focus {
    outline: 0;
  }
  height: 1.5rem;
  border-radius: 7px;
  padding: 0.5rem;
  background-color: #e0e0e0;

  margin-right: 0.75rem;
  cursor: pointer;
  ${isDetele}
`;

export const Span = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// display: flex;
// text-align: left;
// align-items: flex-start;
// text-overflow: ellipsis;
// white-space: nowrap;
// overflow: hidden;
