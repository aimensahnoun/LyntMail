import React from "react";

import { HowItWorksContainer } from "./howItWorks.styles";

function HowItWorks({ title, children, text, isReverse, isFuture }) {
  if (isFuture) {
    return <HowItWorksContainer>
      {children}
      <div style={{ marginLeft: "1rem" }}>
        <h3>Future Plans</h3>
        <p style={{ fontWeight: "regular ", color: "#696969" }}>
          Lyntmail has exciting plans for the future. Since it is a beta, please
          share all the suggestions, feedback, and bugs found. You can get all
          the information in the contacts section. Depending on demand, and
          feedback we are planning short term:
          <br />- Release our email campaign platform. So that you can launch
          email campaigns directly from the Lyntmail
          <br />- More integrations! For now, we are only integrated with
          Mailchimp but per your feedback, we will have more integrations with
          other services
          <br />- Adding customization to campaign pages (your theme, logo, and
          message)
          <br />- Adding ability to automatically redirect a user to your
          desired page after the user submitted the data
        </p>
      </div>
    </HowItWorksContainer>;
  } else if (!isReverse) {
    return (
      <HowItWorksContainer>
        <div style={{ marginRight: "1rem" }}>
          <h3>{title}</h3>
          <p style={{ fontWeight: "regular ", color: "#696969" }}>{text}</p>
        </div>
        {children}
      </HowItWorksContainer>
    );
  } else {
    return (
      <HowItWorksContainer>
        {children}
        <div style={{ marginLeft: "1rem" }}>
          <h3>{title}</h3>
          <p style={{ fontWeight: "regular ", color: "#696969" }}>{text}</p>
        </div>
      </HowItWorksContainer>
    );
  }
}

export default HowItWorks;
