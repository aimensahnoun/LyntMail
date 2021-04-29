import React, { useState } from "react";

import { AiOutlineMail } from "react-icons/ai";
import { Si1Password } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import {
  AuthenticationDecorationContent,
  Form,
  SignInTitle,
  SignInCustomButton,
  MobileButton,
} from "../../pages/authentication/authentication.styles";

import { Formik } from "formik";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";
// import { createStructuredSelector } from "reselect";
import CustomInputField from "../customTextField/customTextField.component";
import { toggleIsLogin } from "../../redux/general/general.actions";

import {
  auth,
  createUserProfileDocument,
  getUserData,
} from "../../firebase/firebase.utils";

import * as Yup from "yup";

function SignUp({
  signUpSuccess,
  signUpFailure,
  setCurrentUser,
  toggleIsLogin,
}) {
  const [isUserExist, setUserExist] = useState(false);
  return (
    <AuthenticationDecorationContent>
      <SignInTitle>Create An Account</SignInTitle>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .min(3, "Full name has to be at least 3 characters")
            .required("This field is required"),
          email: Yup.string()
            .email("Please enter a valid eamil")
            .required("This field is required"),
          password: Yup.string()
            .min(6, "Password has to be at least 6 characters")
            .required("This field is required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const { fullName, email, password } = values;
          try {
            await auth
              .createUserWithEmailAndPassword(email, password)
              .then(async (data) => {
                await createUserProfileDocument(data.user, fullName);

                window.location.reload();
              });
          } catch (error) {
            if (error.code.includes("email-already-in-use")) {
              setUserExist(true);
              return;
            }
          }
          setUserExist(false);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <CustomInputField
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter your name"
            >
              <CgProfile />
            </CustomInputField>
            <CustomInputField
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
            >
              <AiOutlineMail />
            </CustomInputField>
            <CustomInputField
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
            >
              <Si1Password />
            </CustomInputField>
            <h5
              style={{
                display: isUserExist ? "block" : "none",
                color: "#DC3545",
              }}
            >
              A user with this email already exists
            </h5>
            <SignInCustomButton type="submit">
              {isSubmitting ? "Loading..." : "Sign Up"}
            </SignInCustomButton>
          </Form>
        )}
      </Formik>
      <MobileButton onClick={() => toggleIsLogin()}>
        Login to existing account
      </MobileButton>
    </AuthenticationDecorationContent>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (userData) => dispatch(setCurrentUser(userData)),
  toggleIsLogin: () => dispatch(toggleIsLogin()),
});

export default connect(null, mapDispatchToProps)(SignUp);
