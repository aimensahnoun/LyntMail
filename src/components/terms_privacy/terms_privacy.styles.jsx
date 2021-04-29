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