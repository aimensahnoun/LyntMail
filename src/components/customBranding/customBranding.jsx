import React, { useState, useRef, useEffect } from "react";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import { withGetScreen } from "react-getscreen";

import CustomInputField from "../customTextField/customTextField.component";
import { MdSubtitles } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

import Image from "../../images/image.svg";
import { Button } from "../../pages/dashboard/settings/settings.styles";

import axios from "axios";
import {
  applyCustomBranding,
  getCustomBranding,
  auth,
} from "../../firebase/firebase.utils";
import Loader from "react-loader-spinner";

const imgbbUploader = require("imgbb-uploader");
function CustomLink({ isMobile, href }) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState({});
  const [isChange, setIsChange] = useState(false);

  async function fetchData() {
    let datatemp = await getCustomBranding(href, auth.currentUser.uid);
    setData(datatemp);

    setDataLoaded(true);
  }

  useEffect(() => {
    fetchData();
  }, [dataLoaded]);

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setLogo(files[0]);
  };

  const [logo, setLogo] = useState("");

  const fileUploader = useRef(null);
  const anotherFileUploader = useRef(null);

  return !dataLoaded ? (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader type="Puff" color="#E86F52" height={100} width={100} />
    </div>
  ) : (
    <Formik
      initialValues={{
        title: data == undefined ? "" : data.title,
        message: data == undefined ? "" : data.message,
        redirectLink: data == undefined ? "" : data.redirectURL,
        imageUrl: data == undefined ? "" : data.customlogourl,
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .min(3, "The title needs to be at least 3 characters")
          .required("Title can not be empty"),
        message: Yup.string().min(5, "Please enter a valid message"),
        redirectLink: Yup.string().url("Please enter a valid url"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);

        let imageURL = "";
        if (logo !== "") {
          let body = new FormData();
          body.set("key", process.env.REACT_APP_IMGBB);
          body.append("image", logo);

          const res = await axios({
            method: "post",
            url: "https://api.imgbb.com/1/upload",
            data: body,
          });

          imageURL = res.data.data.display_url;
        }

        await applyCustomBranding({
          title: values.title,
          message: values.message,
          redirectLink: values.redirectLink,
          imageUrl: imageURL == "" ? data.customlogourl : imageURL,
          linkID: href != null ? href : auth.currentUser.uid,
        });
        await fetchData();
        setSubmitting(false);
        setIsChange(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
            }}
          >
            <div>
              <h5
                style={{
                  color: "#878791",
                  fontWeigth: "bold",
                  fontSize: ".75rem",
                  marginRight: "0.5rem",
                }}
              >
                Successful Subscription Title:
              </h5>
              <CustomInputField
                width={isMobile() ? "50vw" : "31.4vw"}
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Title"
              >
                <MdSubtitles />
              </CustomInputField>
              <h5
                style={{
                  color: "#878791",
                  fontWeigth: "bold",
                  fontSize: ".75rem",
                  marginRight: "0.5rem",
                }}
              >
                Successful Subscription Message:
              </h5>
              <CustomInputField
                width={isMobile() ? "50vw" : "31.4vw"}
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Message"
              >
                <AiOutlineMessage />
              </CustomInputField>
              <h5
                style={{
                  color: "#878791",
                  fontWeigth: "bold",
                  fontSize: ".75rem",
                  marginRight: "0.5rem",
                }}
              >
                Redirection Link:
              </h5>
              <CustomInputField
                width={isMobile() ? "50vw" : "31.4vw"}
                name="redirectLink"
                value={values.redirectLink}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Redirection Link"
              >
                <BiLinkExternal />
              </CustomInputField>
            </div>
            {logo == "" && data == undefined ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "2rem",
                  marginTop: "18.5px",
                  width: "25rem",
                  height: "18rem",
                  border: "2px dashed #E86F52",
                  borderRadius: "15px",
                }}
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
              >
                <img src={Image} width="130px" height="130px" />
                <h5>Drap and drop your logo here </h5>
                <h5 style={{ marginTop: "-.5rem" }}>Or</h5>
                <input
                  type="file"
                  name="myImage"
                  accept="image/png, image/jpeg"
                  hidden="hidden"
                  onChange={(e) => {
                    setLogo(e.target.files[0]);
                  }}
                  ref={fileUploader}
                />
                <Button
                  style={{ margin: "0", marginTop: "-.5rem" }}
                  onClick={async () => {
                    fileUploader.current.click();
                  }}
                >
                  Choose a file
                </Button>
              </div>
            ) : (
              <div
                style={{
                  marginLeft: "2rem",
                }}
              >
                <h5>Logo :</h5>
                <img
                  src={
                    data.customlogourl == undefined || isChange === true
                      ? URL.createObjectURL(logo)
                      : data.customlogourl
                  }
                  width="400px"
                  height="200px"
                />
                <input
                  type="file"
                  name="myImage"
                  accept="image/png, image/jpeg"
                  hidden="hidden"
                  onChange={(e) => {
                    setLogo(e.target.files[0]);
                    setIsChange(true);
                  }}
                  ref={anotherFileUploader}
                />
                <Button
                  style={{
                    margin: "0",
                    width: "9rem",
                    marginTop: ".5rem",
                    backgroundColor: "transparent",
                    color: "black",
                    border: "2px solid #E86F52",
                  }}
                  onClick={async () => {
                    anotherFileUploader.current.click();
                  }}
                >
                  Choose another file
                </Button>
              </div>
            )}
          </div>
          <Button type="submit">{isSubmitting ? "Loading..." : "Save"} </Button>
        </Form>
      )}
    </Formik>
  );
}

export default withGetScreen(CustomLink);
