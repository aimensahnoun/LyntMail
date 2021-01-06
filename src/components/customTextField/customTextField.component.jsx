import React from "react";

import {
  CustomInput,
  CustomInputContainer,
} from "../../pages/authentication/authentication.styles";

import { ErrorContainer } from "./customTextField.styles";

import { useField } from "formik";

function CustomInputField({ children, ...props }) {
  const [field, meta] = useField(props);
  const width = props.width;

  return (
    <>
      <CustomInputContainer style={width ? { width: width } : null}>
        {children}
        <CustomInput {...field} {...props} />
      </CustomInputContainer>
      {meta.touched && meta.error ? (
        <ErrorContainer>{meta.error}</ErrorContainer>
      ) : null}
    </>
  );
}

export default CustomInputField;
