import React, { useState, useEffect } from "react";
import { withGetScreen } from "react-getscreen";

import { PageContainer } from "../defaut.styles";

import { selectCurrentUser } from "../../../redux/user/user.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import AccountSettings from "../../../components/accountSettings/accountSettings";
import { Container, TabHeader } from "./settings.styles";
import CustomLink from "../../../components/customBranding/customBranding";
function Settings({ user, isMobile }) {
  const [isActive, setActive] = useState(1);

  const renderComponent = () => {
    switch (isActive) {
      case 1:
        return <AccountSettings user={user} />;

      case 2:
        return <CustomLink href={null} />;
    }
  };

  return (
    <PageContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TabHeader
          isActive={isActive === 1 ? true : false}
          onClick={() => setActive(1)}
        >
          Account Settings
        </TabHeader>
        <TabHeader
          isActive={isActive === 2 ? true : false}
          onClick={() => setActive(2)}
        >
          Custom Branding
        </TabHeader>
      </div>
      <Container>{renderComponent()}</Container>
    </PageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default withGetScreen(connect(mapStateToProps)(Settings));
