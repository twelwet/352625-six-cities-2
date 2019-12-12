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
        render={() => {
          return (
            <div className="page page--gray page--main">
              <Header />
              <MainScreen {...props} />
            </div>
          );
        }}
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
          return (
            <div className="page">
              <Header />
              <OfferDetails id={Number(match.params.id)} />
            </div>
          );
        }}
      />
    </Switch>);
};

const mapStateToProps = (state) => ({
  isAuthRequired: getAuthFlag(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: (userData) => {
    dispatch(Operation.signIn(userData));
  }
});

App.propTypes = {
  isAuthRequired: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
