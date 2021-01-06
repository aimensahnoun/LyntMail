import React from "react";

import { connect } from "react-redux";

import { selectIsLogin } from "../../redux/general/general.selector";

import { toggleIsLogin } from "../../redux/general/general.actions";

import { createStructuredSelector } from "reselect";

import {
  AuthenticationDecorationContainer,
  AuthenticationDecorationContent,
  WelcomeTitle,
  RegistrationDescription,
  CustomButton,
} from "../../pages/authentication/authentication.styles";

import Slide from "@material-ui/core/Slide";

function AuthenticationDecoration({ isLogin, toggleisLogin }) {
  return (
    <AuthenticationDecorationContainer isLogin={isLogin}>
      <Slide
        direction="right"
        in={isLogin}
        timeout={{ exit: 2000, enter: 1000 }}
        mountOnEnter
        unmountOnExit
      >
        <AuthenticationDecorationContent>
          <WelcomeTitle>Hello Friend!</WelcomeTitle>
          <RegistrationDescription>
            Create an account and start using our service
          </RegistrationDescription>
          <CustomButton onClick={toggleisLogin}>Sign Up</CustomButton>
        </AuthenticationDecorationContent>
      </Slide>

      <Slide
        direction="left"
        in={!isLogin}
        timeout={{ exit: 2000, enter: 1000 }}
        mountOnEnter
        unmountOnExit
      >
        <AuthenticationDecorationContent>
          <WelcomeTitle>Welcome Back!</WelcomeTitle>
          <RegistrationDescription>
            Login and continue doing great things
          </RegistrationDescription>
          <CustomButton onClick={toggleisLogin}>Login</CustomButton>
        </AuthenticationDecorationContent>
      </Slide>
    </AuthenticationDecorationContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  isLogin: selectIsLogin,
});

const mapDispatchToProps = (dispatch) => ({
  toggleisLogin: () => dispatch(toggleIsLogin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationDecoration);
