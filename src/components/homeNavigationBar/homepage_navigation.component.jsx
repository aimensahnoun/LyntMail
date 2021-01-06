import React from "react";

import { connect } from "react-redux";

import { setIsLogin } from "../../redux/general/general.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { createStructuredSelector } from "reselect";
import {
  Page,
  Title,
  NavigatorContainer,
  Pages,
  Buttons,
  SignInButton,
  SignUpButton,
} from "./homapge_navigation.stlyes";

function HomepageNavigation({ setIsLogin, historyVar, currentUser }) {
  return (
    <Page>
      <NavigatorContainer>
        <Title>Swipe Mail</Title>
        <Pages>About Us</Pages>
        <Pages>Pricing</Pages>
        <Pages>Contact</Pages>
        {currentUser != null ? (
          <Buttons>
            <SignUpButton onClick={() => historyVar.push("/dashboard")}>
              Go to dashboard
            </SignUpButton>
          </Buttons>
        ) : (
          <Buttons>
            <SignInButton
              onClick={() => {
                setIsLogin(true);
                historyVar.push("/authentication");
              }}
            >
              Sign in
            </SignInButton>
            <SignUpButton
              onClick={() => {
                setIsLogin(false);
                historyVar.push("/authentication");
              }}
            >
              Get Started
            </SignUpButton>
          </Buttons>
        )}
      </NavigatorContainer>
    </Page>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setIsLogin: (isLogin) => dispatch(setIsLogin(isLogin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomepageNavigation);
