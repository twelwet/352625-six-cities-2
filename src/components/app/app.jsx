import React from "react";
import MainScreen from "../main-screen/main-screen.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation} from "../../reducer/user/user.js";
import {getAuthFlag} from "../../reducer/user/selectors.js";

const App = (props) => {
  if (props.isAuthRequired) {
    return <SignIn {...props} />;
  } else {
    return <MainScreen />;
  }
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
