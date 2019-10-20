import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {
  const {accommodations} = props;
  return <MainScreen accommodations={accommodations}/>;
};

App.propTypes = {
  accommodations: PropTypes
    .arrayOf(PropTypes
      .shape(
          {
            id: PropTypes.number,
            description: PropTypes.string,
            type: PropTypes.string,
            price: PropTypes.number,
            image: PropTypes.string,
            width: PropTypes.string
          }
      )
    )
};

export default App;
