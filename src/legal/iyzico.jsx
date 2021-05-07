import { Divider } from "@material-ui/core";
import React from "react";

import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import IyzicoLogo from "./iyzico.svg";
const Iyzico = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4>Secure payment</h4>
        <h5 style={{ marginTop: "-1rem" }}>How would you like to pay</h5>
        <div
          style={{
            minWidth: "18vw",
            maxWidth: "18vw",
            backgroundColor: "#075BFA",
            borderRadius: "10px",
            padding: "1rem",
            color: "white",
            display: "flex",
            maxHeight: "1.2rem",
            // alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          Pay via Credit Card
        </div>
        <div
          style={{
            display: "flex",
            minWidth: "18vw",
            maxWidth: "18vw",
            marginTop: ".4rem",
            marginBottom: "1rem",
            justifyContent: "center",
          }}
        >
          <FaCcVisa
            style={{
              fontSize: "1.5rem",
              marginRight: "1rem",
              color: "#262559",
            }}
          />
          <FaCcMastercard
            style={{
              fontSize: "1.5rem",
              marginRight: "1rem",
              color: "#E4001B",
            }}
          />
        </div>
        <Divider color="#000" style={{ width: "18rem" }} />

        <Divider light />
        <div
          style={{
            minWidth: "18vw",
            maxWidth: "18vw",
            marginTop: "1rem",
            maxHeight: "1.2rem",
            backgroundColor: "#fff",
            border: "1px solid #000",
            borderRadius: "10px",
            padding: "1rem",

            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <h5
            style={{
              fontSize: "1rem",
              textAlign: "center",
              alignSelf: "center",
              marginLeft: "auto",
            }}
          >
            Pay with Iyzico
          </h5>
          <img src={IyzicoLogo} height="15rem" style={{ marginLeft: "auto" }} />
        </div>
        <div
          style={{
            marginTop: "1rem",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              color: "#000",
              fontSize: ".8rem",
              cursor: "pointer",
            }}
            target="_blank"
            href="/terms-of-service"
          >
            Terms of Service -
          </a>
          <a
            style={{
              textDecoration: "none",
              color: "#000",
              fontSize: ".8rem",
              cursor: "pointer",
            }}
            target="_blank"
            href="/privacy-policy"
          >
            Privacy Policy -
          </a>
          <a
            style={{
              textDecoration: "none",
              color: "#000",
              fontSize: ".8rem",
              cursor: "pointer",
            }}
            target="_blank"
            href="/cookie-policy"
          >
            Cookie Policy -
          </a>
          <a
            style={{
              textDecoration: "none",
              color: "#000",
              fontSize: ".8rem",
              cursor: "pointer",
            }}
            target="_blank"
            href="/acceptable-use-policy"
          >
            Acceptable Use Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Iyzico;
