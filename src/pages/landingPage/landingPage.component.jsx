import React from "react";

import HomepageNavigation from "../../components/homeNavigationBar/homepage_navigation.component";

import {
  MainHeroContainer,
  VerticalFlex,
  ImageContainer,
  Image,
  Button,
} from "./landingPage.styles";
import Dash from "./dash.png";

function LandingPage({ history }) {
  return (
    <div style={{ backgroundColor: "#F8F7F7" }}>
      <HomepageNavigation historyVar={history} />
      <MainHeroContainer>
        <VerticalFlex>
          <h3
            style={{ color: "#E86F52", fontWeight: "bold", fontSize: "2.7rem" }}
          >
            Newsletters made simple
          </h3>
          <h3 style={{ marginTop: "-3rem" }}>
            Getting people to join your newsletter never been simpler,
            <br />
            only takes a few steps
          </h3>
          <Button>Learn More</Button>
        </VerticalFlex>
        <ImageContainer>
          <Image src={Dash} />
        </ImageContainer>
      </MainHeroContainer>
    </div>
  );
}

export default LandingPage;
