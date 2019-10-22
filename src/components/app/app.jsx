import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen.jsx";

const App = ({accommodations, onDescriptionClick}) => {
  return <MainScreen
    accommodations={accommodations}
    onClick={onDescriptionClick}
  />;
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
            rating: PropTypes.number,
            isPremium: PropTypes.bool,
            isBookmark: PropTypes.bool
          }
      )
    ),
  onDescriptionClick: PropTypes.func
};

export default App;
