import React from "react";
import MainScreen from "../main-screen/main-screen.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthFlag} from "../../reducer/user/selectors.js";

const App = (props) => {
  if (props.isAuthRequired) {
    return <SignIn />;
  } else {
    return <MainScreen />;
  }
};

const mapStateToProps = (state) => ({
  isAuthRequired: getAuthFlag(state),
});

App.propTypes = {
  isAuthRequired: PropTypes.bool
};

export {App};

export default connect(mapStateToProps)(App);
