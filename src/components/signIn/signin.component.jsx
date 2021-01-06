import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Si1Password } from "react-icons/si";

import {
  AuthenticationDecorationContent,
  Form,
  SignInCustomButton,
  SignInTitle,
  ForgotPassword,
  MobileButton,
} from "../../pages/authentication/authentication.styles";
import { toggleIsLogin } from "../../redux/general/general.actions";

import * as Yup from "yup";
import ForgotPasswordModal from "../forgotPasswordModal/forgotPasswordModal.component";
import { Formik } from "formik";
import CustomInputField from "../customTextField/customTextField.component";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleForgotPassword } from "../../redux/general/general.actions";
import { selectForgotPassword } from "../../redux/general/general.selector";

function SignIn({ toggleForgotPassword, isForgotPassword, toggleIsLogin }) {
  const [isNotUser, setNotUser] = useState(false);
  const [isWrongPassword, setWrongPassword] = useState(false);
  const [isTooManyRequests, setManyRequests] = useState(false);
  return (
    <AuthenticationDecorationContent>
      <SignInTitle>Sign in to Swipe Mail</SignInTitle>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Please enter a valid eamil")
            .required("This field is required"),
          password: Yup.string()
            .min(6, "Password has to be at least 6 characters")
            .required("This field is required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const { email, password } = values;
          setWrongPassword(false);
          setNotUser(false);
          setManyRequests(false);
          try {
            await auth.signInWithEmailAndPassword(email, password);
          } catch (error) {
            if (error.code.includes("wrong-password")) {
              setWrongPassword(true);
              return;
            } else if (error.code.includes("user-not-found")) {
              setNotUser(true);
              return;
            } else if (error.code.includes("too-many-requests")) {
              setManyRequests(true);
              return;
            }
          }
          setWrongPassword(false);
          setNotUser(false);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <CustomInputField
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter you email"
            >
              <AiOutlineMail />
            </CustomInputField>
            <CustomInputField
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter you password"
            >
              <Si1Password />
            </CustomInputField>
            <ForgotPassword
              onClick={() => {
                toggleForgotPassword();
              }}
            >
              Forgot password ?
            </ForgotPassword>
            <h5
              style={{
                display: isNotUser ? "block" : "none",
                color: "#DC3545",
              }}
            >
              No user found with this email
            </h5>
            <h5
              style={{
                display: isWrongPassword ? "block" : "none",
                color: "#DC3545",
              }}
            >
              Wrong password
            </h5>
            <h5
              style={{
                display: isTooManyRequests ? "block" : "none",
                color: "#DC3545",
              }}
            >
              Too many requests, please try again later
            </h5>
            <SignInCustomButton type="submit">
              {isSubmitting ? "Loading..." : "Login"}
            </SignInCustomButton>
            {isForgotPassword ? <ForgotPasswordModal /> : null}
          </Form>
        )}
      </Formik>
      <MobileButton onClick={() => toggleIsLogin()}>
        Create an account
      </MobileButton>
    </AuthenticationDecorationContent>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleForgotPassword: () => dispatch(toggleForgotPassword()),
  toggleIsLogin: () => dispatch(toggleIsLogin()),
});

const mapStateToProps = createStructuredSelector({
  isForgotPassword: selectForgotPassword,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
