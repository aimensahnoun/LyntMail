import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Container, Div, ButtonDiv, ItemsDiv, Item } from "./MobileNav.styles";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { selectButton } from "../../redux/general/general.selector";
import { createStructuredSelector } from "reselect";
import { changeButton } from "../../redux/general/general.actions";
import { setCurrentUser } from "../../redux/user/user.actions";

import { auth } from "../../firebase/firebase.utils";

function MobileNav({ button, setButton, setCurrentUser }) {
  const history = useHistory();
  const [isOpen, setOpen] = useState(false);
  return (
    <Div>
      <ButtonDiv isOpen={isOpen}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </ButtonDiv>
      <Container isOpen={isOpen}>
        <ItemsDiv>
          <Item
            isOpen={isOpen}
            onClick={() => {
              setOpen(false);
              setButton(1);
            }}
          >
            Dashboard
          </Item>
          <Item
            isOpen={isOpen}
            onClick={() => {
              setOpen(false);
              setButton(2);
            }}
          >
            Campaigns
          </Item>
          <Item
            isOpen={isOpen}
            onClick={() => {
              setOpen(false);
              setButton(3);
            }}
          >
            Links
          </Item>
          <Item
            isOpen={isOpen}
            onClick={() => {
              setOpen(false);
              setButton(4);
            }}
          >
            Settings
          </Item>
          <Item
            isOpen={isOpen}
            onClick={() => {
              setOpen(false);
              setButton(5);
            }}
          >
            Help
          </Item>
          <Item
            isOpen={isOpen}
            onClick={async () => {
              setOpen(false);
              await auth.signOut();
              setCurrentUser(null);
              history.push("/");
            }}
          >
            Logout
          </Item>
        </ItemsDiv>
      </Container>
    </Div>
  );
}

const mapStateToProps = createStructuredSelector({
  button: selectButton,
});

const mapDispatchToProps = (dispatch) => ({
  setButton: (button) => dispatch(changeButton(button)),
  setCurrentUser: (userData) => dispatch(setCurrentUser(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);
