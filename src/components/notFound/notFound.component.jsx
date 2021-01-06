import React from "react";
import { Container } from "./notFound.styles";
import Image from "../../images/not_found.svg";

function NotFound({ text }) {
  return (
    <Container>
      <img
        src={Image}
        alt="Not_Found"
        style={{
          maxWidth: "40%",
          display: "block",
          objectFit: "contain",
        }}
      />
      <h1>{text}</h1>
    </Container>
  );
}

export default NotFound;
