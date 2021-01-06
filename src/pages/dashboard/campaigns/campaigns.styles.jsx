import styled from "styled-components";

export const Container = styled.div`
  height: 80%;
  width: 100%;
  border-radius: 13px;
  background-color: #fff;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.006),
    0 100px 80px rgba(0, 0, 0, 0.02);
  padding: 1rem 1rem;
  @media screen and (max-width: 800px) {
    width: 95%;
  }
`;

export const DescriptionParagraph = styled.p`
  font-size: 0.75rem;
  color: #666666;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Span = styled.span`
  @media screen and (max-width: 800px) {
    font-size: 0.75rem;
  }
`;

export const Button = styled.button`
  width: 7rem;
  height: 2rem;
  border: none;
  border-radius: 20px;
  background-color: #e86f52;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  user-select: none;
  margin-top: 1rem;
  -webkit-box-shadow: 0 0 5px 5px rgba(232, 95, 57, 0.3);
  -moz-box-shadow: 0 0 5px 5px rgba(232, 95, 57, 0.3);
  box-shadow: 0 0px 5px 5px rgba(232, 95, 57, 0.3);
  &:focus {
    outline: 0;
  }
`;

export const Table = styled.div`
  overflow-y: scroll;

  width: 100%;
  height: 95%;
  padding: 0.4rem 1rem;
`;

export const TableHeader = styled.div`
  display: flex;
  font-weight: bold;
  @media screen and (max-width: 800px) {
  }
`;

export const HeaderBlock = styled.div`
  text-align: left;
  width: 20%;

  &:nth-child(2) {
    width: 30%;
  }

  &:nth-child(3) {
    width: 20%;
  }
  &:nth-child(10) {
    width: 20%;
  }
`;
