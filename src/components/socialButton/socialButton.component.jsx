import React from "react";

import { Container } from "./socialButton.style";
import Tooltip from "@material-ui/core/Tooltip";
function SocialButton({ color, children, tooltip, onClick }) {
  return (
    <Tooltip title={tooltip} onClick={onClick}>
      <Container style={{ backgroundColor: color }}>{children}</Container>
    </Tooltip>
  );
}

export default SocialButton;
