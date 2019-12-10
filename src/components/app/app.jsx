import React from "react";
import MainScreen from "../main-screen/main-screen.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import Favorites from "../favorites/favorites.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation} from "../../reducer/user/user.js";
import {getAuthFlag} from "../../reducer/user/selectors.js";
import {Route, Switch, Redirect} from "react-router-dom";
import {getOfferById} from "../../reducer/data/selectors";

const App = (props) => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <div className="page page--gray page--main">
            <Header />
            <MainScreen {...props} />
          </div>
        )}
      />

      <Route
        exact
        path="/login"
        render={() => {
          return props.isAuthRequired
            ? (
              <div className="page page--gray page--login">
                <Header />
                <SignIn {...props} />
              </div>
            ) : (
              <Redirect to="/" />
            );
        }}
      />

      <Route
        exact
        path="/favorites"
        render={() => {
          return props.isAuthRequired
            ? (
              <Redirect to="/" />
            ) : (
              <div className="page">
                <Header />
                <Favorites {...props} />
                <Footer />
              </div>
            );
        }}
      />

      <Route
        exact
        path="/offer/:id"
        render={({match}) => {
          const currentOffer = getOfferById(props.state, Number(match.params.id));
          return (
            <div className="page">
              <Header />
              <OfferDetails {...currentOffer} />
            </div>
          );
        }}
      />
    </Switch>);
};

const mapStateToProps = (state) => ({
  isAuthRequired: getAuthFlag(state),
  state
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: (userData) => {
    dispatch(Operation.signIn(userData));
  }
});

App.propTypes = {
  isAuthRequired: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  state: PropTypes.object
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
