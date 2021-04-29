import React from "react";

import { PageContainer } from "../defaut.styles";
import {
  Container,
  DescriptionParagraph,
  Header,
  Button,
  Table,
  TableHeader,
  HeaderBlock,
} from "./links.styles";

import Link from "../../../components/link/link.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { showModal } from "../../../redux/general/general.selector";
import { selectLinks } from "../../../redux/user/user.selector";
import { toggleModal } from "../../../redux/general/general.actions";
import LinkModal from "../../../components/linkModal/linkModal.component";
import NotFound from "../../../components/notFound/notFound.component";

function Links({ toggleModal, links }) {
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
          Links
        </h2>
        <Button
          onClick={async () => {
            toggleModal();
          }}
        >
          Generate Link
        </Button>
      </Header>

      <Container>
        <DescriptionParagraph>
          Generate links that you can share with your followers and website
          visitors to capture their information.
        </DescriptionParagraph>
        <TableHeader>
          <HeaderBlock>
            <span>Campaign</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Type</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Link</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Status</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Actions</span>
          </HeaderBlock>
        </TableHeader>
        <Table>
          {links.length === 0 ? (
            <NotFound text="You do not have any links" />
          ) : (
            links.map((link) => <Link key={link.href} linkData={link} />)
          )}
        </Table>
        <DescriptionParagraph>
          <strong>
            ** The number of Mailchimp links that can be generated depends on
            your Mailchimp membership
          </strong>
        </DescriptionParagraph>
      </Container>
      <LinkModal />
    </PageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  showModal: showModal,
  links: selectLinks,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Links);
