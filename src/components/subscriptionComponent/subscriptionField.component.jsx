import React from "react";
import SocialButton from "../socialButton/socialButton.component";
import {
  Container,
  ButtonsContainer,
  SubmitContainer,
  Button,
  Text,
  Result,
} from "./subscriptionField.style";
import { GrGoogle, GrTwitter } from "react-icons/gr";
import { FaYahoo, FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import {
  subAuth,
  signInWithGoogle,
  signInWithFacebook,
  signInWithYahoo,
  signInWithGithub,
  handleSubscription,
} from "../../firebase/subscription.utils";
function SubscribeField({
  loggedIn,
  sub,
  linkFound,
  linkData,
  alreadySubbed,
  done,
  setDone,
  setAlreadySubbed,
  apiKey,
  href,
}) {
  return alreadySubbed ? (
    <Container style={{ display: "flex", alignItems: "center" }}>
      <Result style={{ color: "#DC3545" }}>
        You are already subscribed to this newsletter.
      </Result>
    </Container>
  ) : done ? (
    <Container style={{ display: "flex", alignItems: "center" }}>
      <Result style={{ color: "#28A745" }}>
        You have successfully subscribed to this newsletter
      </Result>
    </Container>
  ) : !linkFound ? (
    <Container style={{ display: "flex", alignItems: "center" }}>
      <h1 style={{ color: "#DC3545", fontSize: "1.7rem" }}>
        This link has either been deleted or deactivated.
        <br />
        Please try again later.
      </h1>
    </Container>
  ) : loggedIn ? (
    <Container>
      <Text>
        You are trying to subscribe to this newsletter with {sub.email}, do you
        want to continue?
      </Text>
      <SubmitContainer>
        <h6
          style={{ marginRight: "1rem", cursor: "pointer" }}
          onClick={async () => await subAuth.signOut()}
        >
          Use a different account
        </h6>
        <Button
          onClick={async () => {
            const res = await handleSubscription(linkData, sub, apiKey, href);
            if (res === "Done") {
              setDone();
            } else if (res.includes("already exists")) {
              setAlreadySubbed();
            }
          }}
        >
          Submit
        </Button>
      </SubmitContainer>
    </Container>
  ) : (
    <Container>
      <h4>
        Welcome to Swipe Mail, please choose a way to provide your information
      </h4>
      <ButtonsContainer>
        <SocialButton
          color="#ea4335"
          tooltip="Google"
          onClick={signInWithGoogle}
        >
          <GrGoogle />
        </SocialButton>
        <SocialButton color="#34D1F7" tooltip="Twitter">
          <GrTwitter />
        </SocialButton>
        <SocialButton
          color="#4064AC"
          tooltip="Facebook"
          onClick={signInWithFacebook}
        >
          <FaFacebookF />
        </SocialButton>
        <SocialButton color="#6E0E99" tooltip="Yahoo" onClick={signInWithYahoo}>
          <FaYahoo />
        </SocialButton>
        <SocialButton
          color="#211F1F"
          tooltip="Github"
          onClick={signInWithGithub}
        >
          <FiGithub />
        </SocialButton>
      </ButtonsContainer>
    </Container>
  );
}

export default SubscribeField;
