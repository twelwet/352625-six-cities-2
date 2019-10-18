import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {
  const {descriptions} = props;
  return <MainScreen descriptions={descriptions}/>;
};

App.propTypes = {descriptions: PropTypes.arrayOf(PropTypes.string)};

export default App;
