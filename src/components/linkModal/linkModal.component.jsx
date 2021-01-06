import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { showModal, selectorType } from "../../redux/general/general.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { toggleModal, selectType } from "../../redux/general/general.actions";
import { SiMailDotRu, SiMailchimp } from "react-icons/si";
import Tooltip from "@material-ui/core/Tooltip";

import { Container, TypeDiv, Type, Button } from "./linkModal.styles";
import { CgRename } from "react-icons/cg";
import Radio from "@material-ui/core/Radio";
import { withGetScreen } from "react-getscreen";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  generateNewLink,
  createMailChimpLink,
} from "../../firebase/firebase.utils";
import CustomInputField from "../customTextField/customTextField.component";

function LinkModal({
  showModal,
  toggleModal,
  type,
  selectType,
  currentUser,
  isMobile,
}) {
  const [showApiError, setError] = useState(false);
  const [showLinkError, setLinkError] = useState(false);
  const [isLoaded, setLoading] = useState(false);
  const [isExist, setExist] = useState(false);
  useEffect(() => {
    if (!isLoaded) {
      selectType(1);
      setLoading(true);
    }
  }, [isLoaded, selectType]);
  return (
    <Modal
      open={showModal}
      onClose={toggleModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Formik
        initialValues={{
          campaignName: "",
          type: "SwipeMail",
        }}
        validationSchema={Yup.object({
          campaignName: Yup.string()
            .min(3, "Campaign name has to have at least 3 characters")
            .required("Required field"),
          type: Yup.string(),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          setError(false);
          setLinkError(false);
          setExist(false);
          const { campaignName, type } = values;
          let mailChimpResponse = "";
          if (currentUser.user.api_key == null || currentUser.user.api_key == '' && type === "MailChimp") {
            setError(true);
            return;
          } else if (type === "MailChimp") {
            mailChimpResponse = await createMailChimpLink(
              currentUser.user.api_key,
              campaignName
            );
            if (mailChimpResponse === "Forbidden") {
              setLinkError(true);
              return;
            }
          } else {
            var result = await generateNewLink(campaignName, type);
            console.log(result)
            if (result === 1) {
              setExist(true);
              return;
            }
          }
          setError(false);
          setLinkError(false);
          setSubmitting(false);
          toggleModal();
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Container>
            <h4>Generate a new link</h4>
            <Form onSubmit={handleSubmit}>
              <h5
                style={{
                  color: "#878791",
                  fontWeigth: "bold",
                  fontSize: ".75rem",
                  marginRight: "0.5rem",
                }}
              >
                Campagin:
              </h5>
              <CustomInputField
                width={isMobile() ? "20rem" : "23rem"}
                name="campaignName"
                value={values.campaignName}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Enter campaign's name"
              >
                <CgRename />
              </CustomInputField>
              <TypeDiv>
                <h5
                  style={{
                    color: "#878791",
                    fontWeigth: "bold",
                    fontSize: ".75rem",
                    marginRight: "0.5rem",
                  }}
                >
                  Type:
                </h5>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Type>
                    <SiMailDotRu style={{ color: "#666666" }} />
                    <Tooltip title="Swipe Mail">
                      <Radio
                        name="type"
                        checked={type === 1}
                        onChange={() => {
                          values.type = "SwipeMail";
                          selectType(1);
                        }}
                        color={"#FD9E01"}
                        value="SwipeMail"
                      />
                    </Tooltip>
                  </Type>
                </div>
                <Type>
                  <SiMailchimp style={{ color: "#666666" }} />
                  <Tooltip title="MailChimp">
                    <Radio
                      name="type"
                      checked={type === 2}
                      onChange={() => {
                        values.type = "MailChimp";
                        selectType(2);
                      }}
                      color={"#FD9A01"}
                      valeu="MailChimp"
                    />
                  </Tooltip>
                </Type>
              </TypeDiv>
              <h5
                style={{
                  display: showApiError ? "block" : "none",
                  color: "#DC3545",
                }}
              >
                Please add MailChimp Api key before creating a MailChimp link
              </h5>
              <h5
                style={{
                  display: showLinkError ? "block" : "none",
                  color: "#DC3545",
                }}
              >
                You cannot add more MailChimp links, Please check your MailChimp
                subscription
              </h5>
              <h5
                style={{
                  display: isExist ? "block" : "none",
                  color: "#DC3545",
                }}
              >
                A campaign with the same name already exists, please pick a
                different name
              </h5>
              <Button type="submit">
                {" "}
                {isSubmitting ? "Generating..." : "Generate"}
              </Button>
            </Form>
          </Container>
        )}
      </Formik>
    </Modal>
  );
}

const mapStateToProps = createStructuredSelector({
  showModal: showModal,
  type: selectorType,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
  selectType: (type) => dispatch(selectType(type)),
});
export default withGetScreen(
  connect(mapStateToProps, mapDispatchToProps)(LinkModal)
);
