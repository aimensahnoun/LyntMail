import React from "react";
import { Container, FieldBlock, LinkButton, Span } from "./subscriber.styles";
import Tooltip from "@material-ui/core/Tooltip";

import { AiOutlineDelete } from "react-icons/ai";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { deleteSubscriber } from "../../firebase/firebase.utils";

function Subscriber({ subs }) {
  return (
    <Container>
      <FieldBlock>
        <span>{subs.full_name}</span>
      </FieldBlock>
      <FieldBlock>
        <Span>{subs.email}</Span>
      </FieldBlock>
      <FieldBlock>
        <span>
          {subs.phone_number == null ? "No Phone Number" : subs.phone_number}
        </span>
      </FieldBlock>
      <FieldBlock>
        <span>{subs.campaign_name}</span>
      </FieldBlock>
      <FieldBlock>
        <Tooltip title="Delete">
          <LinkButton
            onClick={async () =>
              await deleteSubscriber(subs.sub_id, subs.subscribed_to)
            }
            isDelete
          >
            <AiOutlineDelete style={{ color: "#fff" }} />{" "}
          </LinkButton>
        </Tooltip>
      </FieldBlock>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  // subs: selectCustomCampaign,
});

export default connect(mapStateToProps)(Subscriber);
