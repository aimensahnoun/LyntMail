import styled from "styled-components";

export const MainHeroContainer = styled.div`
  display: flex;
  margin: 7rem 5rem;
`;

export const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
`;

export const ImageContainer = styled.div`
  width: 35rem;

  margin-top: -2rem;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Button = styled.button`
  display: block;

  width: 12rem;
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
