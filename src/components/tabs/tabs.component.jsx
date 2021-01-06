import React from "react";

import { RiLinksLine, RiSettingsLine } from "react-icons/ri";
import { IoIosSpeedometer } from "react-icons/io";
import { MdHelp } from "react-icons/md";
import { HiOutlineLogout, HiOutlineSpeakerphone } from "react-icons/hi";

import { TabsContainer, Tab, Seperation } from "./tabs.styles";

import { connect } from "react-redux";
import { selectButton } from "../../redux/general/general.selector";

import { createStructuredSelector } from "reselect";
import { changeButton } from "../../redux/general/general.actions";
import { setCurrentUser } from "../../redux/user/user.actions";
import { useHistory } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

function Tabs({ button, setButton, setCurrentUser, router }) {
  const history = useHistory();
  return (
    <TabsContainer>
      <h3
        onClick={() => history.push("/")}
        style={{ color: "#E86F52", cursor: "pointer" }}
      >
        Swipe Mail
      </h3>
      <Tab isActive={button === 1 ? true : false} onClick={() => setButton(1)}>
        <IoIosSpeedometer style={{ marginRight: ".35rem" }} />
        <p>Dashboard</p>
      </Tab>
      <Tab isActive={button === 2 ? true : false} onClick={() => setButton(2)}>
        <HiOutlineSpeakerphone style={{ marginRight: ".35rem" }} />
        <p>Campaigns</p>
      </Tab>
      <Tab isActive={button === 3 ? true : false} onClick={() => setButton(3)}>
        <RiLinksLine style={{ marginRight: ".35rem" }} />
        <p>Links</p>
      </Tab>
      <Seperation />

      <Tab isActive={button === 4 ? true : false} onClick={() => setButton(4)}>
        <RiSettingsLine style={{ marginRight: ".35rem" }} />
        <p>Settings</p>
      </Tab>
      <Tab isActive={button === 5 ? true : false} onClick={() => setButton(5)}>
        <MdHelp style={{ marginRight: ".35rem" }} />
        <p>Help</p>
      </Tab>
      <Tab
        isLogout
        onClick={async () => {
          await auth.signOut();
          setCurrentUser(null);
          history.push("/");
        }}
      >
        <HiOutlineLogout style={{ marginRight: ".35rem" }} />
        <p>Logout</p>
      </Tab>
    </TabsContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  button: selectButton,
});

const mapDispatchToProps = (dispatch) => ({
  setButton: (button) => dispatch(changeButton(button)),
  setCurrentUser: (userData) => dispatch(setCurrentUser(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
