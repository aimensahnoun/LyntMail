import React from "react";

import { PageContainer } from "../defaut.styles";

import { StatBoxContainer, ChartContainer } from "./stats.styles";

import { RiUserSmileLine } from "react-icons/ri";
import { BiGroup } from "react-icons/bi";
import { HiSpeakerphone } from "react-icons/hi";
import {FaMailchimp} from "react-icons/fa";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selector";

import StatBox from "../../../components/statBox/statBox.component";

import LineChart from "../../../components/lineChart/lineChart.component";
import DoughnutChart from "../../../components/doughnutChart/doughnutChart.component";
import Grid from "@material-ui/core/Grid";
import { withGetScreen } from "react-getscreen";

function Stats({ userData, isMobile }) {
  return (
    <PageContainer>
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
            data={userData.user.quota + " Users"}
          >
            <RiUserSmileLine />
          </StatBox>
        </Grid>
        <Grid item lg={3} md={6} xs={6}>
          <StatBox
            title={"Total Subscribers"}
            data={userData.user.subscriber_count + " Subscribers"}
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
      <Grid container spacing={0}>
        <Grid item lg={6} md={12} xs={12}>
          <LineChart />
        </Grid>
        <Grid item>
          <DoughnutChart lg={6} md={12} xs={12} />
        </Grid>
      </Grid>
    </PageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  userData: selectCurrentUser,
});

export default withGetScreen(connect(mapStateToProps)(Stats));
