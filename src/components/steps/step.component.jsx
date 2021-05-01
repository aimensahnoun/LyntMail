import React from "react";

import { StepContainer } from "./step.styles";

function Step({ number, step, desc }) {
  return (
    <StepContainer>
      <div></div>
      <h3 style={{ marginBottom: "-1.5rem" }}>{number}</h3>
      <h5 style={{ marginBottom: "0rem" }}>{step}</h5>
      <h6 style={{ fontSize: "1.5vh" }}> {desc}</h6>
    </StepContainer>
  );
}

export default Step;
