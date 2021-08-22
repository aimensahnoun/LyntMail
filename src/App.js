import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AuthenticationPage from "./pages/authentication/authentication.component";
import Dashboard from "./pages/dashboard/dashboard.component";
import LandingPage from "./pages/landingPage/landingPage.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

import { auth, getUserData } from "./firebase/firebase.utils.js";
import Subscription from "./pages/subscription/subscription.component";
import Term from "./legal/terms";
import Privacy from "./legal/privacy";
import Use from "./legal/use";
import Cookie from "./legal/cookie.jsx";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const test = await getUserData(userAuth.uid);
        setCurrentUser(test);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/authentication"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/dashboard" />
              ) : (
                <AuthenticationPage />
              )
            }
          />
          <Route
            exact
            path="/dashboard"
            render={() =>
              !this.props.currentUser ? (
                <Redirect to="/authentication" />
              ) : (
                <Dashboard />
              )
            }
          />
          <Route exact path="/terms-of-service" component={Term} />

          <Route exact path="/privacy-policy" component={Privacy} />

          <Route exact path="/cookie-policy" component={Cookie} />
          <Route exact path="/acceptable-use-policy" component={Use} />
          <Route exact path="/:href" component={Subscription} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (userData) => dispatch(setCurrentUser(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
