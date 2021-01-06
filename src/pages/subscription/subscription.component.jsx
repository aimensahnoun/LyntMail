import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { PageContainer, Title, LoaderContainer } from "./subscription.styles";
import SubscribeField from "../../components/subscriptionComponent/subscriptionField.component";
import {
  subAuth,
  getCampaignDetails,
  getOwnerApiKey,
} from "../../firebase/subscription.utils";
class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      sub: null,
      isLoading: true,
      linkFound: false,
      linkData: null,
      alreadySubbed: false,
      done: false,
      apiKey: null,
      href: null,
    };
  }

  unsubscribeFromAuth = null;

  async componentDidMount() {
    const href = this.props.match.url.split("/")[1];
    const linkData = await getCampaignDetails(href);
    if (linkData.length !== 0 && linkData !== undefined) {
      const api_key = await getOwnerApiKey(linkData[0].owner_id);
      this.setState({
        linkData: linkData,
        linkFound: true,
        apiKey: api_key,
        href: href,
      });
    }

    this.unsubscribeFromAuth = subAuth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        this.setState({
          sub: {
            fullName: userAuth.displayName,
            email: userAuth.email,
            phoneNumber: userAuth.phoneNumber,
          },
        });
        this.setState({ loggedIn: true, isLoading: false });
      } else {
        this.setState({ loggedIn: false, isLoading: false });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  setSuccessToTrue = () => {
    this.setState({ done: true });
  };
  setAlreadySubbedToTrue = () => {
    this.setState({ alreadySubbed: true });
  };
  render() {
    const {
      loggedIn,
      sub,
      isLoading,
      linkFound,
      linkData,
      alreadySubbed,
      done,
      apiKey,
      href,
    } = this.state;

    return (
      <PageContainer>
        <Title>Swipe Mail</Title>
        {isLoading ? (
          <LoaderContainer>
            <Loader type="Puff" color="#E86F52" height={100} width={100} />
          </LoaderContainer>
        ) : (
          <SubscribeField
            loggedIn={loggedIn}
            sub={sub}
            linkFound={linkFound}
            linkData={linkData}
            alreadySubbed={alreadySubbed}
            done={done}
            setDone={this.setSuccessToTrue}
            setAlreadySubbed={this.setAlreadySubbedToTrue}
            apiKey={apiKey}
            href={href}
          />
        )}
      </PageContainer>
    );
  }
}

export default Subscription;
