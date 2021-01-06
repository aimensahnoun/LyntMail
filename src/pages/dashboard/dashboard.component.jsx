import React from "react";

import Tabs from "../../components/tabs/tabs.component";
import Stats from "./stats/stats.component";
import Campaigns from "./campaigns/campaigns.component";
import Links from "./links/links.component";
import Settings from "./settings/settings.component";
import Help from "./help/help.component";
import { connect } from "react-redux";
import { selectButton } from "../../redux/general/general.selector";
import { createStructuredSelector } from "reselect";
import { DashboardPage } from "./dashboard.styles";
import MobileNav from "../../components/mobileNav/MobileNav.component";
function Dashboard({ button, history }) {
  function renderPage() {
    switch (button) {
      case 1:
        return <Stats />;
      case 2:
        return <Campaigns />;
      case 3:
        return <Links />;
      case 4:
        return <Settings />;
      case 5:
        return <Help />;
      default:
        return <Stats />;
    }
  }

  return (
    <DashboardPage>
      <Tabs />
      <MobileNav />
      {renderPage()}
    </DashboardPage>
  );
}

const mapStateToProps = createStructuredSelector({
  button: selectButton,
});

export default connect(mapStateToProps)(Dashboard);
