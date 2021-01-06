import React from "react";
import { Container, TextContainer, Icon } from "./statBox.styles";

function StatBox({ title, data, children }) {
  return (
    <Container>
      <TextContainer>
        <h2>{title}</h2>
        <h2>{data}</h2>
      </TextContainer>
      <Icon>{children}</Icon>
    </Container>
  );
}

export default StatBox;
