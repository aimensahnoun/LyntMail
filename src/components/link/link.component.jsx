import React, { useState } from "react";
import { Container, FieldBlock, LinkButton, Span, Dot } from "./link.styles";
import Tooltip from "@material-ui/core/Tooltip";
import { FaMailchimp } from "react-icons/fa";
import { SiMailDotRu } from "react-icons/si";
import { BsLink45Deg, BsClipboard } from "react-icons/bs";
import { CgToggleOn, CgToggleOff } from "react-icons/cg";
import { BiCustomize } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import copy from "copy-to-clipboard";
import { deleteLink, toggleLink } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Link({ linkData, currentUser }) {
  const [isCopied, changeCopied] = useState(false);
  const [isError, changeError] = useState(false);
  const [isModalOpen , changeModal] = useState(false);
  return (
    <Container>
      <FieldBlock>
        <span>{linkData.campaign_name} </span>
      </FieldBlock>

      <FieldBlock>
        {linkData.campaign_type === "SwipeMail" ? (
          <SiMailDotRu style={{ fontSize: "1.7rem", color: "#666" }} />
        ) : (
          <FaMailchimp style={{ fontSize: "1.7rem", color: "#666" }} />
        )}
      </FieldBlock>

      <FieldBlock>
        <BsLink45Deg
          style={{ fontSize: "1.7rem", color: "#666", marginRight: ".5rem," }}
        />
        <Span>lyntmail.com/{linkData.href}</Span>
      </FieldBlock>

      <FieldBlock>
        <Tooltip title={linkData.is_active ? "Active" : "Inactive"}>
          <Dot
            style={{
              backgroundColor: linkData.is_active ? "#28A745" : "#DC3545",
            }}
          />
        </Tooltip>
      </FieldBlock>

      <FieldBlock>
        <Tooltip
          title="Copy To Clipboard"
          onClick={() => {
            copy(`lyntmail.com/${linkData.href}`);
            changeCopied(true);
          }}
        >
          <LinkButton>
            <BsClipboard style={{ color: "#000" }} />{" "}
          </LinkButton>
        </Tooltip>

        <Tooltip
          title={linkData.is_active ? "Deactivate" : "Activate"}
          onClick={async () => {
            const result = await toggleLink(
              linkData.href,
              currentUser.user.quota,
              linkData.is_active
            );
            if (result === false) {
              changeError(true);
            }
          }}
        >
          <LinkButton>
            {linkData.is_active ? (
              <CgToggleOff style={{ color: "#000" }} />
            ) : (
              <CgToggleOn style={{ color: "#000" }} />
            )}
          </LinkButton>
        </Tooltip>
{/* 
        <Tooltip title="Customize" onClick={() => alert("Hola")}>
          <LinkButton>
            <BiCustomize style={{ color: "#000" }} />{" "}
          </LinkButton>
        </Tooltip>  */}

        <Tooltip title="Delete">
          <LinkButton
            isDelete
            onClick={() => {
              deleteLink(
                linkData.href,
                linkData.campaign_type,
                linkData.list_id,
                currentUser.user.api_key
              );
            }}
          >
            <AiOutlineDelete style={{ color: "#fff" }} />{" "}
          </LinkButton>
        </Tooltip>
      </FieldBlock>

      <Snackbar
        open={isCopied}
        autoHideDuration={2000}
        onClose={() => changeCopied(false)}
      >
        <Alert onClose={() => changeCopied(false)} severity="success">
          Link Copied!
        </Alert>
      </Snackbar>

      <Snackbar
        open={isError}
        autoHideDuration={2000}
        onClose={() => changeError(false)}
      >
        <Alert onClose={() => changeError(false)} severity="error">
          You cannot activate a link on full quota!
        </Alert>
      </Snackbar>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Link);
