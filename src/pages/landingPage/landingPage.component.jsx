import React, { useState } from "react";

import HomepageNavigation from "../../components/homeNavigationBar/homepage_navigation.component";

import { AiFillCheckCircle } from "react-icons/ai";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import { HiTranslate } from "react-icons/hi";
import { VscError } from "react-icons/vsc";

import { isMobile } from "react-device-detect";
import { connect } from "react-redux";

import { setIsLogin } from "../../redux/general/general.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { createStructuredSelector } from "reselect";
import IyzicoLogo from "../../legal/iyzico.svg";

import {
  MainHeroContainer,
  VerticalFlex,
  ImageContainer,
  Image,
  CustomButton,
  HowItWorksContainer,
  StepContainer,
  StepsContainer,
  HowContainer,
  PricingContainer,
  PriceTable,
  Feature,
  Footer,
  PriceContainer,
  Page,
  Title,
  NavigatorContainer,
  Pages,
  PagesContainer,
  Buttons,
  SignInButton,
  SignUpButton,
} from "./landingPage.styles";

import Step from "../../components/steps/step.component";
import HowItWorks from "../../components/howItWorks/howItWorks.component";
import Divider from "@material-ui/core/Divider";

import Dash from "./dash.png";
import link from "./link.svg";
import social from "./social.svg";
import mailchimp from "./mailchimp.svg";
import future from "./future.svg";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const howItWorks = {
  link: {
    title: "Generate Links",
    text:
      "Lyntmail generates URL links unique to your campaign and then you can share them with your followers on social media or link them on your website. No more boring forms that the leads do not want to fill.",
  },
  subscription: {
    title: "How do I capture leads through these links?",
    text:
      "Lyntmails does not use forms to get the data. No need to worry though, considering that most people have at least two social media accounts open at all times, links shared with followers on social media or linked on your website will get the needed data from your followers' or visitors' social media accounts with their permissions and store it in your Lyntmail dashboard. From the dashboard, you can get all the data in excel format to upload it manually to any service to launch email campaigns or you can directly integrate Lyntmail with Mailchimp",
  },
  mailChimp: {
    title: "What if I have Mailchimp?",
    text:
      "Lyntmail offers integration to Mailchimp by generating URL links that are connected to your Mailchimp account. All of the leads collected through that link will be stored in the Mailchimp dashboard and from there you can launch your email campaigns.",
  },
  FuturePlans: {
    title: "Future Plans",
    text: `Lyntmail has exciting plans for the future. Since it is a beta, please share all the suggestions, feedback, and bugs found. You can get all the information in the contacts section. Depending on demand, and feedback we are planning short term:\ 
    - Release our email campaign platform. So that you can launch email campaigns directly from the Lyntmail\
    - More integrations! For now, we are only integrated with Mailchimp but per your feedback, we will have more integrations with other services\
    - Adding customization to campaign pages (your theme, logo, and message)\
    - Adding ability to automatically redirect a user to your desired page after the user submitted the data`,
  },
};

function LandingPage({ history, currentUser, setIsLogin }) {
  const [isTerms, toggleTerms] = useState(false);
  const [isPrivacy, togglePrivacy] = useState(false);
  const [isLanguageOpen, toggleMenu] = useState(false);
  return (
    <div style={{ backgroundColor: "#F8F7F7" }}>
      <Page>
        <NavigatorContainer isMobile={isMobile}>
          <Title>
            Lyntmail<span style={{ fontSize: ".8rem" }}> beta</span>
          </Title>
          <PagesContainer style={{ userSelect: "none" }}>
            <Pages href="#home">Home</Pages>
            <Pages href="#steps">Steps</Pages>
            <Pages href="#how-it-works">How It Works</Pages>
            <Pages href="#pricing">Pricing</Pages>
          </PagesContainer>
          {currentUser != null ? (
            <Buttons>
              <SignUpButton onClick={() => history.push("/dashboard")}>
                Go to dashboard
              </SignUpButton>
            </Buttons>
          ) : (
            <Buttons>
              <SignInButton
                onClick={() => {
                  setIsLogin(true);
                  history.push("/authentication");
                }}
              >
                Sign in
              </SignInButton>
              <SignUpButton
                onClick={() => {
                  setIsLogin(false);
                  history.push("/authentication");
                }}
              >
                Get Started
              </SignUpButton>
            </Buttons>
          )}
        </NavigatorContainer>
      </Page>
      <MainHeroContainer id="home">
        <VerticalFlex isMain={true}>
          <h3 style={{ fontWeight: "bold", fontSize: "3rem" }}>
            You have lost thousands of leads!
          </h3>
          <h3
            style={{
              marginTop: "-3rem",
              color: "#B4B7C1",
              textAlign: "center",
            }}
          >
            Lyntmail makes you generate leads directly from your social media or
            anywhere else with just one click. <br />
            No more missed opportunities to capture the data of a lead.
            <br />
          </h3>
          <CustomButton
            onClick={() => {
              setIsLogin(false);
              history.push("/authentication");
            }}
          >
            Get Started
          </CustomButton>
        </VerticalFlex>
        <ImageContainer>
          <Image src={Dash} />
        </ImageContainer>
      </MainHeroContainer>

      <StepsContainer id="steps">
        <VerticalFlex>
          <h3 style={{ fontSize: "1.5rem" }}>The four steps to your success</h3>
          <h3 style={{ marginTop: "-1.5rem", color: "#B4B7C1" }}>
            Surprisingly, all it takes to change the way you use newsletters is
            four steps
          </h3>
          <StepContainer>
            <Step
              number="01"
              step="Register"
              desc="First you need to create a Lyntmail account and get started"
            />
            <Step
              number="02"
              step="Generate Link"
              desc="Lyntmail gives you a link that will direct leads to your campaign"
            />
            <Step
              number="03"
              step="Share"
              desc="Share your campaign link on social media or link it to your website"
            />
            <Step
              number="04"
              step="Enjoy"
              desc="Congrats, all you need to do is sit back and enjoy while you get leads"
            />
          </StepContainer>
        </VerticalFlex>
      </StepsContainer>

      <HowItWorksContainer id={"how-it-works"}>
        <VerticalFlex>
          <h3 style={{ fontSize: "1.5rem" }}>How It Works</h3>
          <h3 style={{ marginTop: "-1.5rem", color: "#B4B7C1" }}>
            Lyntmail simplifies a way to capture leads. No need to set up a
            website with a lead generation form to capture the data.
          </h3>
          <HowContainer>
            <HowItWorks
              title={howItWorks.link.title}
              text={howItWorks.link.text}
            >
              <img src={link} alt="Logo" width="300rem" height="260rem" />
            </HowItWorks>
          </HowContainer>

          <HowContainer>
            <HowItWorks
              title={howItWorks.subscription.title}
              text={howItWorks.subscription.text}
              isReverse
            >
              <img src={social} alt="Logo" width="300rem" height="260rem" />
            </HowItWorks>
          </HowContainer>
          <HowContainer>
            <HowItWorks
              title={howItWorks.mailChimp.title}
              text={howItWorks.mailChimp.text}
              isReverse={isMobile ? true : false}
            >
              <img src={mailchimp} alt="Logo" width="300rem" height="260rem" />
            </HowItWorks>
          </HowContainer>
          <HowContainer>
            <HowItWorks
              title={howItWorks.FuturePlans.title}
              text={howItWorks.FuturePlans.text}
              isFuture
              isReverse
            >
              <img src={future} alt="Logo" width="300rem" height="260rem" />
            </HowItWorks>
          </HowContainer>
        </VerticalFlex>
      </HowItWorksContainer>

      <PricingContainer id="pricing">
        <VerticalFlex>
          <h3 style={{ fontSize: "1.5rem" }}>
            Find a plan that's right for you
          </h3>
          <h3 style={{ marginTop: "-1.5rem", color: "#B4B7C1" }}>
            For Beta testing period, only the Beta package will be available
          </h3>
          <PriceContainer style={{ alignItems: "center" }}>
            <PriceTable>
              <h5>Beta Package</h5>
              <Divider />
              <h4>Free</h4>
              <Divider />

              <Feature style={{ marginBottom: "-2.5rem" }}>
                <AiFillCheckCircle
                  style={{ color: "#6BD570", marginRight: "1vw" }}
                />
                <h6>1,000 leads</h6>
              </Feature>
              <Feature style={{ marginBottom: "-2.5rem" }}>
                <AiFillCheckCircle
                  style={{ color: "#6BD570", marginRight: "1vw" }}
                />
                <h6>Unlimited Lyntmail links</h6>
              </Feature>
              <Feature style={{ marginBottom: "-2.5rem" }}>
                <AiFillCheckCircle
                  style={{ color: "#6BD570", marginRight: "1vw" }}
                />
                <h6>Unlimited Mailchimp links</h6>
              </Feature>
              <Feature>
                <AiFillCheckCircle
                  style={{ color: "#6BD570", marginRight: "1vw" }}
                />
                <h6>Export leads to CSV</h6>
              </Feature>
            </PriceTable>

            {
              <PriceTable>
                <h5>Pro Package</h5>
                <Divider />
                <h4>$9.99/Month</h4>
                <Divider />

                <Feature style={{ marginBottom: "-2.5rem" }}>
                  <AiFillCheckCircle
                    style={{ color: "#6BD570", marginRight: "1vw" }}
                  />
                  <h6>5,000 monthly leads</h6>
                </Feature>
                <Feature style={{ marginBottom: "-2.5rem" }}>
                  <AiFillCheckCircle
                    style={{ color: "#6BD570", marginRight: "1vw" }}
                  />
                  <h6>Unlimited Lyntmail links</h6>
                </Feature>
                <Feature style={{ marginBottom: "-2.5rem" }}>
                  <AiFillCheckCircle
                    style={{ color: "#6BD570", marginRight: "1vw" }}
                  />
                  <h6>Unlimited Mailchimp links</h6>
                </Feature>
                <Feature>
                  <AiFillCheckCircle
                    style={{ color: "#6BD570", marginRight: "1vw" }}
                  />
                  <h6>Export leads to CSV</h6>
                </Feature>
                <div
                  style={{
                    // minWidth: "18vw",
                    // maxWidth: "18vw",

                    maxHeight: "1rem",
                    backgroundColor: "#fff",
                    border: "1px solid #000",
                    borderRadius: "10px",
                    padding: "1rem",

                    display: "flex",
                    // alignItems: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "1rem",
                      textAlign: "center",
                      alignSelf: "center",
                      marginLeft: "auto",
                    }}
                  >
                    Pay with Iyzico
                  </h5>
                  <img
                    src={IyzicoLogo}
                    height="15rem"
                    style={{ marginLeft: "auto" }}
                  />
                </div>
              </PriceTable>
            }

            {
              <PriceTable>
                <h5>Premium Package</h5>
                <Divider />
                <h4>$14.99/Month</h4>
                <Divider />

                <Feature style={{ marginBottom: "-2.5rem" }}>
                  <AiFillCheckCircle
                    style={{ color: "#6BD570", marginRight: "1vw" }}
                  />
                  <h6>15,000 monthly leads</h6>
                </Feature>
                <Feature style={{ marginBottom: "-2.5rem" }}>
                  <AiFillCheckCircle
                    style={{ color: "#6BD570", marginRight: "1vw" }}
                  />
                  <h6>Unlimited Lyntmail links</h6>
                </Feature>
                <Feature style={{ marginBottom: "-2.5rem" }}>
                  <AiFillCheckCircle
                    style={{ color: "#6BD570", marginRight: "1vw" }}
                  />
                  <h6>Unlimited Mailchimp links</h6>
                </Feature>
                <Feature>
                  <AiFillCheckCircle
                    style={{ color: "#6BD570", marginRight: "1vw" }}
                  />
                  <h6>Export leads to CSV</h6>
                </Feature>

                <div
                  style={{
                    // minWidth: "18vw",
                    // maxWidth: "18vw",

                    maxHeight: "1rem",
                    backgroundColor: "#fff",
                    border: "1px solid #000",
                    borderRadius: "10px",
                    padding: "1rem",

                    display: "flex",
                    // alignItems: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "1rem",
                      textAlign: "center",
                      alignSelf: "center",
                      marginLeft: "auto",
                    }}
                  >
                    Pay with Iyzico
                  </h5>
                  <img
                    src={IyzicoLogo}
                    height="15rem"
                    style={{ marginLeft: "auto" }}
                  />
                </div>
              </PriceTable>
            }
          </PriceContainer>
        </VerticalFlex>
      </PricingContainer>

      <Footer style={{ position: "relative" }}>
        <VerticalFlex style={{ marginTop: "1.5rem" }}>
          <StepContainer
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              marginBottom: "2vh",
            }}
          >
            <SiFacebook
              style={{
                color: "#fff",
                fontSize: "1.5rem",
                marginRight: "2vw",
                cursor: "pointer",
              }}
              onClick={() =>
                window.open("https://www.facebook.com/lyntlabs", "_blank")
              }
            />
            <SiInstagram
              style={{
                color: "#fff",
                fontSize: "1.5rem",
                marginRight: "2vw",
                cursor: "pointer",
              }}
              onClick={() =>
                window.open("https://www.instagram.com/lyntlabs", "_blank")
              }
            />
            <SiTwitter
              style={{ color: "#fff", fontSize: "1.5rem", cursor: "pointer" }}
              onClick={() =>
                window.open("https://twitter.com/lyntlabs", "_blank")
              }
            />
            {/* <div style={{ position: "absolute", right: "3vw" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => toggleMenu(!isLanguageOpen)}
              >
                <HiTranslate style={{ color: "white", marginRight: ".25vw" }} />
                <h4 style={{ color: "white" }}>Turkish</h4>
              </div>
            </div> */}
          </StepContainer>

          <StepContainer style={{ justifyContent: "center", width: "100vw" }}>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: ".8rem",
                cursor: "pointer",
              }}
              href="#home"
            >
              Home-
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: ".8rem",
                cursor: "pointer",
              }}
              href="#steps"
            >
              Steps-
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: ".8rem",
                cursor: "pointer",
              }}
              href="#how-it-works"
            >
              How It Works-
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: ".8rem",
                cursor: "pointer",
              }}
              href="#pricing"
            >
              Pricing
            </a>
          </StepContainer>
          <StepContainer style={{ justifyContent: "center", width: "100vw" }}>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: ".8rem",
                cursor: "pointer",
              }}
              href="mailto: support@lyntmail.com"
            >
              support@lyntmail.com
            </a>
          </StepContainer>
          <div
            style={{
              display: "flex",
              minWidth: "18vw",
              maxWidth: "18vw",
              marginTop: ".4rem",
              marginBottom: "1rem",
              justifyContent: "center",
              marginBottom: "-.9rem",
            }}
          >
            <FaCcVisa
              style={{
                fontSize: "1.5rem",
                marginRight: "1rem",
                color: "#262559",
              }}
            />
            <FaCcMastercard
              style={{
                fontSize: "1.5rem",
                marginRight: "1rem",
                color: "#E4001B",
              }}
            />
          </div>

          <StepContainer
            style={{
              justifyContent: "center",
              width: "100vw",
              marginTop: "2vh",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: ".8rem",
                cursor: "pointer",
              }}
              target="_blank"
              href="/terms-of-service"
            >
              Terms of Service -
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: ".8rem",
                cursor: "pointer",
              }}
              target="_blank"
              href="/privacy-policy"
            >
              Privacy Policy -
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: ".8rem",
                cursor: "pointer",
              }}
              target="_blank"
              href="/cookie-policy"
            >
              Cookie Policy -
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: ".8rem",
                cursor: "pointer",
              }}
              target="_blank"
              href="/acceptable-use-policy"
            >
              Acceptable Use Policy
            </a>
          </StepContainer>
          <h6 style={{ color: "white" }}>&copy; 2021 Lyntlabs</h6>
        </VerticalFlex>
      </Footer>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setIsLogin: (isLogin) => dispatch(setIsLogin(isLogin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
