import React from "react";

import { connect } from "react-redux";

import { selectIsLogin } from "../../redux/general/general.selector";

import { createStructuredSelector } from "reselect";

import { Title, PageContainer, FormContainer } from "./authentication.styles";

import SignIn from "../../components/signIn/signin.component";
import SignUp from "../../components/signUp/signUp.component";
import AuthenticationDecoration from "../../components/authenticationDecoration/authenticationDecoration.component";
import { useHistory } from "react-router-dom";

function AuthenticationPage({ isLogin }) {
  const history = useHistory();
  return (
    <div>
      <Title
        isLogin={isLogin}
        onClick={() => {
          history.push("/");
        }}
        style={{ cursor: "pointer" }}
      >
        Lyntmail
      </Title>
      <PageContainer>
        <FormContainer isLogin={isLogin}>
          {isLogin ? <SignIn /> : <SignUp />}
        </FormContainer>
        <AuthenticationDecoration />
      </PageContainer>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isLogin: selectIsLogin,
});

export default connect(mapStateToProps)(AuthenticationPage);
