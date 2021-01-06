import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectForgotPassword } from "../../redux/general/general.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { toggleForgotPassword } from "../../redux/general/general.actions";
import { Container, Button } from "./forgotPasswordModal.styles";
import { auth } from "../../firebase/firebase.utils";
import { AiOutlineMail } from "react-icons/ai";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { withGetScreen } from "react-getscreen";
import CustomInputField from "../customTextField/customTextField.component";

function ForgotPasswordModal({
  toggleForgotPassword,
  isForgotPassword,
  isMobile,
}) {
  const [isUser, setIsUser] = useState(false);
  const [isRandomErorr, setRandomError] = useState(false);
  const [isCorrect, setCorrect] = useState(false);
  return (
    <Modal
      open={isForgotPassword}
      onClose={toggleForgotPassword}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Please enter a valid email")
            .required("Required field"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const { email } = values;
            await auth.sendPasswordResetEmail(email);
          } catch (error) {
            if (error.code.includes("user-not-found")) {
              setCorrect(false);
              setIsUser(true);
              return;
            } else {
              setCorrect(false);
              setRandomError(true);
              return;
            }
          }
          setCorrect(true);
          setRandomError(false);
          setIsUser(false);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Container>
            <h4>Reset Password</h4>
            <h6 style={{ color: "#878791", marginTop: "-1rem" }}>
              Please enter the email address you used in your account in order
              to get the reset password email
            </h6>
            <Form onSubmit={handleSubmit}>
              <h5
                style={{
                  color: "#878791",
                  fontWeigth: "bold",
                  fontSize: ".75rem",
                  marginRight: "0.5rem",
                }}
              >
                Email:
              </h5>
              <CustomInputField
                width={isMobile() ? "18rem" : "23rem"}
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Enter your email"
              >
                <AiOutlineMail />
              </CustomInputField>

              <h5
                style={{
                  display: isRandomErorr ? "block" : "none",
                  color: "#DC3545",
                }}
              >
                Something went wrong!
              </h5>
              <h5
                style={{
                  display: isUser ? "block" : "none",
                  color: "#DC3545",
                }}
              >
                No user found with this email
              </h5>
              <h5
                style={{
                  display: isCorrect ? "block" : "none",
                  color: "#28A745",
                }}
              >
                Password reset email sent successfully{" "}
              </h5>
              <Button type="submit">
                {" "}
                {isSubmitting ? "Sending email..." : "Reset"}
              </Button>
            </Form>
          </Container>
        )}
      </Formik>
    </Modal>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isForgotPassword: selectForgotPassword,
});

const mapDispatchToProps = (dispatch) => ({
  toggleForgotPassword: () => dispatch(toggleForgotPassword()),
});
export default withGetScreen(
  connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordModal)
);
