import React from "react";
import { Container, FieldBlock, LinkButton, Span } from "./link.styles";
import Tooltip from "@material-ui/core/Tooltip";
import { FaMailchimp } from "react-icons/fa";
import { SiMailDotRu } from "react-icons/si";
import { BsLink45Deg, BsClipboard } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import copy from "copy-to-clipboard";
import { deleteLink } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";

function Link({ linkData, currentUser }) {
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
        <Span>mailswipe.com/{linkData.href}</Span>
      </FieldBlock>
      <FieldBlock>
        <Tooltip
          title="Copy To Clipboard"
          onClick={() => copy(`mailswipe.com/${linkData.href}`)}
        >
          <LinkButton>
            <BsClipboard style={{ color: "#000" }} />{" "}
          </LinkButton>
        </Tooltip>
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
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Link);
