import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Route, Switch, Redirect} from "react-router-dom";

import MainScreen from "../main-screen/main-screen.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Favorites from "../favorites/favorites.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";

import {Operation} from "../../reducer/user/user.js";
import {getAuthFlag} from "../../reducer/user/selectors.js";

import withWrapperPage from "../../hocs/with-wrapper-page/with-wrapper-page.js";
import withWrapperPageMain from "../../hocs/with-wrapper-page-main/with-wrapper-page-main.js";
import withWrapperPageLogin from "../../hocs/with-wrapper-page-login/with-wrapper-page-login.js";


const MainScreenWrapped = withWrapperPageMain(MainScreen);
const SignInWrapped = withWrapperPageLogin(SignIn);
const FavoritesWrapped = withWrapperPage(Favorites);
const OfferDetailsWrapped = withWrapperPage(OfferDetails);

const App = (props) => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <MainScreenWrapped {...props} />
        )}
      />

      <Route
        exact
        path="/login"
        render={() => props.isAuthRequired ? (
          <SignInWrapped {...props} />
        ) : (
          <Redirect to="/" />
        )}
      />

      <Route
        exact
        path="/favorites"
        render={() => props.isAuthRequired ? (
          <Redirect to="/" />
        ) : (
          <FavoritesWrapped {...props} />
        )}
      />

      <Route
        exact
        path="/offer/:id"
        render={({match}) => (
          <OfferDetailsWrapped id={Number(match.params.id)} />
        )}
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
