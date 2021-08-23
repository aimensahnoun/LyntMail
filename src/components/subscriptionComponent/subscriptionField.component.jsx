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
  signInWithTwitter,
  signInWithMicroSoft,
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
  href,
  isActive,
  customBrand,
}) {
  if (
    done &&
    (customBrand.redirectURL != "" || customBrand.redirectURL != undefined)
  ) {
    const link = customBrand.redirectURL;

    const a = document.createElement("a");
    a.setAttribute("href", link);
    a.setAttribute("target", "_blank");
    a.click();
  }
  return alreadySubbed ? (
    <Container style={{ display: "flex", alignItems: "center" }}>
      <Result style={{ color: "#DC3545" }}>
        You are already subscribed to this newsletter.
      </Result>
    </Container>
  ) : done ? (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {customBrand ? (
        <div>
          <Result style={{ color: "#28A745", textAlign: "center" }}>
            {customBrand.title}
          </Result>
          <p>{customBrand.message}</p>
        </div>
      ) : (
        <Result style={{ color: "#28A745", textAlign: "center" }}>
          Thank you! You may close this page
        </Result>
      )}
    </Container>
  ) : !linkFound || !isActive ? (
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
        Is {sub.email} good for you or do you want to use another one?
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
            const res = await handleSubscription(linkData, sub, href);
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
        Welcome to Lyntmail, please choose a way to provide your information
      </h4>
      <ButtonsContainer>
        <SocialButton
          color="#ea4335"
          tooltip="Google"
          onClick={signInWithGoogle}
        >
          <GrGoogle />
        </SocialButton>

        {/* <SocialButton
          color="#34D1F7"
          tooltip="Twitter"
          onClick={signInWithMicroSoft}
        >
          <GrTwitter />
        </SocialButton> */}

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
