import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { PageContainer, Title, LoaderContainer } from "./subscription.styles";
import SubscribeField from "../../components/subscriptionComponent/subscriptionField.component";
import { subAuth, getCampaignDetails } from "../../firebase/subscription.utils";
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
      href: null,
      isActive: null,
    };
  }

  unsubscribeFromAuth = null;

  async componentDidMount() {
    const href = this.props.match.url.split("/")[1];
    const linkData = await getCampaignDetails(href);
    if (linkData !== undefined && linkData.length !== 0) {
      this.setState({
        linkData: linkData,
        linkFound: true,
        href: href,
        isActive: linkData[0].is_active,
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
      href,
      isActive,
    } = this.state;

    return (
      <PageContainer>
        <Title>Lyntmail</Title>
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
            href={href}
            isActive={isActive}
          />
        )}
      </PageContainer>
    );
  }
}

export default Subscription;
