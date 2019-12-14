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

import withWrapper from "../../hocs/with-wrapper/with-wrapper.js";


const MainScreenWrapped = withWrapper(MainScreen);
const SignInWrapped = withWrapper(SignIn);
const FavoritesWrapped = withWrapper(Favorites);
const OfferDetailsWrapped = withWrapper(OfferDetails);

const App = (props) => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <MainScreenWrapped
            wrapperClass="page page--gray page--main"
            {...props}
          />
        )}
      />

      <Route
        exact
        path="/login"
        render={() => props.isAuthRequired ? (
          <SignInWrapped
            wrapperClass="page page--gray page--login"
            {...props} />
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
          <FavoritesWrapped
            wrapperClass="page"
          />
        )}
      />

      <Route
        exact
        path="/offer/:id"
        render={({match}) => (
          <OfferDetailsWrapped
            wrapperClass="page"
            id={Number(match.params.id)}
          />
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
