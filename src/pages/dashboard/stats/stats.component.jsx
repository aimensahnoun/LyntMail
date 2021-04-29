import React, { useState, useEffect } from "react";

import { PageContainer } from "../defaut.styles";

import { ChartContainer } from "./stats.styles";

import { RiUserSmileLine } from "react-icons/ri";
import { BiGroup } from "react-icons/bi";
import { HiSpeakerphone } from "react-icons/hi";
import { FaMailchimp } from "react-icons/fa";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selector";

import StatBox from "../../../components/statBox/statBox.component";
import { Container } from "../../../components/linkModal/linkModal.styles";

import LineChart from "../../../components/lineChart/lineChart.component";
import DoughnutChart from "../../../components/doughnutChart/doughnutChart.component";
import Grid from "@material-ui/core/Grid";
import { withGetScreen } from "react-getscreen";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function Stats({ userData, isMobile }) {
  const [isOpen, changeStatus] = useState(false);
  useEffect(() => {
    if (userData.user.quota == 0) {
      changeStatus(true);
    }
  }, [userData.user.quota]);
  return (
    <PageContainer>
      <Dialog open={isOpen}>
        <DialogTitle>Beta Quota Full</DialogTitle>
        <DialogContent style={{ backgroundColor: "#fff" }}>
          <DialogContentText
            id="alert-dialog-description"
            style={{ color: "#000", fontWeight: "500" }}
          >
            Your beta quota is full, thank you for trying our service and we
            hope you liked it.
            <br />
            If you want to refill your quota or provide feedback please email us
            at :
            <span >
              <a style={{ textDecoration: "none" }} href="mailto: support@lyntmail.com">support@lyntmail.com</a>
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <h5
            onClick={() => changeStatus(false)}
            style={{ marginLeft: "auto", cursor: "pointer" }}
          >
            Close
          </h5>
        </DialogActions>
      </Dialog>

      <h2
        style={{
          fontWeight: "bold",
          color: "#000",
          fontSize: "1.5rem",
          letterSpacing: "1px",
          marginBottom: "2rem",
        }}
      >
        Overview
      </h2>

      <Grid container spacing={isMobile() ? 1 : 3}>
        <Grid item lg={3} md={6} xs={6}>
          <StatBox
            title={"Remaining quota"}
            data={userData.user.quota + " Leads"}
          >
            <RiUserSmileLine />
          </StatBox>
        </Grid>
        <Grid item lg={3} md={6} xs={6}>
          <StatBox
            title={"Total Leads"}
            data={userData.user.subscriber_count + " Leads"}
          >
            <BiGroup />
          </StatBox>
        </Grid>
        <Grid item lg={3} md={6} xs={6}>
          <StatBox
            title={"Total Active Campaigns"}
            data={userData.user.totalLink + " Campaigns"}
          >
            <HiSpeakerphone />
          </StatBox>
        </Grid>
        <Grid item lg={3} md={6} xs={6}>
          <StatBox
            title={"Total Mailchimp links"}
            data={userData.user.mailChimpLink + " MailChimp Links"}
          >
            <FaMailchimp />
          </StatBox>
        </Grid>
      </Grid>

      <ChartContainer>
        <LineChart />
        <DoughnutChart />
      </ChartContainer>
    </PageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  userData: selectCurrentUser,
});

export default withGetScreen(connect(mapStateToProps)(Stats));
