import React, { useState } from "react";
import { withGetScreen } from "react-getscreen";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  auth,
  confirmApiKey,
  updateUserData,
} from "../../firebase/firebase.utils";
import { AiOutlineMail } from "react-icons/ai";
import { Si1Password } from "react-icons/si";
import { BiKey } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import {
  Container,
  Button,
  APIContainer,
  Vertical,
} from "../../pages/dashboard/settings/settings.styles";

import CustomInputField from "../customTextField/customTextField.component";

const AccountSettings = ({ user, isMobile }) => {
  const [changeEmail, setChangeEmail] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [randomError, setRandomError] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [missingApiKey, setMissingApiKey] = useState(false);
  const [invalidApi, setInValidApi] = useState(false);
  return (
    <Formik
      initialValues={{
        name: user.user.full_name,
        email: user.user.email,
        apiKey: user.user.api_key ? user.user.api_key : "",
        oldPassword: "",
        newPassword: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Name has to have at least 3 characters")
          .required("Name can not be empty"),
        email: Yup.string()
          .email("Please enter a valid email")
          .required("Email can not be empty"),
        apiKey: Yup.string(),
        oldPassword: Yup.string().min(
          6,
          "Password has to be at least 6 characteres"
        ),
        newPassword: Yup.string()
          .min(6, "Password has to be at least 6 characteres")
          .test(
            "passwords-match",
            "New password can not be your old password",

            function (value) {
              if (value !== undefined) {
                return this.parent.oldPassword !== value;
              } else {
                return true;
              }
            }
          ),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setCorrect(false);
        setRandomError(false);
        setWrongPassword(false);
        setChangePassword(false);
        setChangeEmail(false);
        setMissingApiKey(false);
        setInValidApi(false);
        const { name, email, apiKey, oldPassword, newPassword } = values;
        try {
          if (apiKey !== user.user.api_key || name != user.user.full_name) {
            if (apiKey !== user.user.api_key) {
              if (["", null, undefined].includes(apiKey)) {
                for (let i = 0; i < user.links.length; i++) {
                  if (
                    user.links[i].campaign_type === "MailChimp" &&
                    user.links[i].is_active === true
                  )
                    return setMissingApiKey(true);
                }
              } else {
                const result = await confirmApiKey(apiKey);
                if (result == false) return setInValidApi(true);
              }
            }
            await updateUserData(email, apiKey, name);
          }
          if (email !== user.user.email) {
            if (oldPassword === "") {
              setChangeEmail(true);
              return;
            }
            await auth.signInWithEmailAndPassword(user.user.email, oldPassword);
            await auth.currentUser.updateEmail(email);
            await auth.signInWithEmailAndPassword(email, oldPassword);
            await updateUserData(email, apiKey, name);
          }
          if (
            newPassword.length > 0 &&
            (oldPassword.length === 0 || oldPassword === undefined)
          ) {
            setChangePassword(true);
            return;
          }
          if (newPassword !== "" && oldPassword !== "") {
            await auth.signInWithEmailAndPassword(email, oldPassword);
            await auth.currentUser.updatePassword(newPassword);
            await auth.signInWithEmailAndPassword(email, newPassword);
          }
        } catch (error) {
          if (error.code.includes("wrong-password")) {
            setCorrect(false);
            setWrongPassword(true);
            return;
          } else {
            setCorrect(false);
            setRandomError(true);
            return;
          }
        }
        setCorrect(true);
        setRandomError(false);
        setWrongPassword(false);
        setChangePassword(false);
        setChangeEmail(false);
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <h5
            style={{
              color: "#878791",
              fontWeigth: "bold",
              fontSize: ".75rem",
              marginRight: "0.5rem",
            }}
          >
            Change Name:
          </h5>
          <CustomInputField
            width={isMobile() ? "50vw" : "31.4vw"}
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Full Name"
          >
            <CgProfile />
          </CustomInputField>
          <APIContainer>
            <Vertical>
              <h5
                style={{
                  color: "#878791",
                  fontWeigth: "bold",
                  fontSize: ".75rem",
                  marginRight: "0.5rem",
                }}
              >
                Change Email:
              </h5>
              <CustomInputField
                width={isMobile() ? "50vw" : "13.15vw"}
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Email"
              >
                <AiOutlineMail
                  style={{ fontSize: isMobile() ? "1rem" : "3rem" }}
                />
              </CustomInputField>
            </Vertical>
            <div style={{ width: "2rem" }}></div>
            <Vertical>
              <h5
                style={{
                  color: "#878791",
                  fontWeigth: "bold",
                  fontSize: ".75rem",
                  marginRight: "0.5rem",
                }}
              >
                Mailchimp :
              </h5>
              <CustomInputField
                width={isMobile() ? "50vw" : "13.15vw"}
                name="apiKey"
                value={values.apiKey}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Api Key"
              >
                <BiKey style={{ fontSize: isMobile() ? "1rem" : "3rem" }} />
              </CustomInputField>
            </Vertical>
          </APIContainer>
          <APIContainer style={{ marginBottom: isMobile() ? "-1rem" : "0" }}>
            <Vertical>
              <h5
                style={{
                  color: "#878791",
                  fontWeigth: "bold",
                  fontSize: ".75rem",
                  marginRight: "0.5rem",
                }}
              >
                Change Password:
              </h5>
              <CustomInputField
                width={isMobile() ? "50vw" : "13.15vw"}
                name="oldPassword"
                value={values.oldPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                placeholder="Old Password"
              >
                <Si1Password
                  style={{ fontSize: isMobile() ? "1rem" : "3rem" }}
                />
              </CustomInputField>
            </Vertical>
            <div style={{ width: "2rem" }}></div>
            <Vertical style={{ marginTop: isMobile() ? ".5rem" : "3.4rem" }}>
              <CustomInputField
                width={isMobile() ? "50vw" : "13.15vw"}
                name="newPassword"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                placeholder="New Password"
              >
                <Si1Password
                  style={{ fontSize: isMobile() ? "1rem" : "3rem" }}
                />
              </CustomInputField>
            </Vertical>
          </APIContainer>
          <h5
            style={{
              display: invalidApi ? "block" : "none",
              color: "#DC3545",
              marginBottom: "-2rem",
            }}
          >
            Invalid Mailchimp Api{" "}
          </h5>
          <h5
            style={{
              display: missingApiKey ? "block" : "none",
              color: "#DC3545",
              marginBottom: "-2rem",
            }}
          >
            You cannot delete api key while having an active mailchimp campaing{" "}
          </h5>
          <h5
            style={{
              display: changeEmail ? "block" : "none",
              color: "#DC3545",
              marginBottom: "-2rem",
            }}
          >
            Please enter your password in order to change Email{" "}
          </h5>
          <h5
            style={{
              display: changePassword ? "block" : "none",
              color: "#DC3545",
              marginBottom: "-2rem",
            }}
          >
            Please enter your old password in order to change password{" "}
          </h5>
          <h5
            style={{
              display: wrongPassword ? "block" : "none",
              color: "#DC3545",
              marginBottom: "-2rem",
            }}
          >
            Old password is wrong{" "}
          </h5>
          <h5
            style={{
              display: randomError ? "block" : "none",
              color: "#DC3545",
              marginBottom: "-2rem",
            }}
          >
            Something went wrong{" "}
          </h5>
          <h5
            style={{
              display: correct ? "block" : "none",
              color: "#28A745",
              marginBottom: "-2rem",
            }}
          >
            Changes done successfully{" "}
          </h5>
          <Button type="submit">{isSubmitting ? "Saving ..." : "Save"}</Button>
        </Form>
      )}
    </Formik>
  );
};

export default withGetScreen(AccountSettings);
