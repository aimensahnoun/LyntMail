import React from "react";

import { PageContainer } from "../defaut.styles";
import {
  Container,
  Header,
  Button,
  Table,
  TableHeader,
  HeaderBlock,
  Span,
} from "./campaigns.styles";
import NotFound from "../../../components/notFound/notFound.component";
import Subscriber from "../../../components/subscriber/subscriber.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { CSVLink } from "react-csv";
import {
  selectCampaigns,
  selectCSVData,
} from "../../../redux/user/user.selector";
import LinkModal from "../../../components/linkModal/linkModal.component";

function Campaigns({ subscribers, CSVData }) {
  return (
    <PageContainer>
      <Header>
        <h2
          style={{
            fontFamily: "Gilroy",
            fontWeight: "bold",
            color: "#000",
            fontSize: "1.5rem",
            letterSpacing: "1px",
            marginBottom: "2rem",
          }}
        >
          Campaigns
        </h2>

        <Button
          onClick={() => {
            return;
          }}
        >
          <CSVLink
            data={CSVData}
            filename={"LyntMail.csv"}
            separator={","}
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Export CSV
          </CSVLink>
        </Button>
      </Header>

      <Container>
        <TableHeader>
          <HeaderBlock>
            <Span>Name</Span>
          </HeaderBlock>
          <HeaderBlock>
            <Span>Email</Span>
          </HeaderBlock>
          <HeaderBlock>
            <Span>Phone Number</Span>
          </HeaderBlock>
          <HeaderBlock>
            <Span>Campaign</Span>
          </HeaderBlock>
          <HeaderBlock>
            <Span>Actions</Span>
          </HeaderBlock>
        </TableHeader>
        <Table>
          {subscribers.length === 0 ? (
            <NotFound text="You do not have any leads yet " />
          ) : (
            subscribers.map((subscriber) => {
              return <Subscriber key={subscriber.sub_id} subs={subscriber} />;
            })
          )}
        </Table>
      </Container>
      <LinkModal />
    </PageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  subscribers: selectCampaigns,
  CSVData: selectCSVData,
});

export default connect(mapStateToProps)(Campaigns);
