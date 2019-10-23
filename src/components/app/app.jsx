import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen.jsx";

const App = ({offers, onDescriptionClick}) => {
  return <MainScreen
    offers={offers}
    onDescriptionClick={onDescriptionClick}
  />;
};

App.propTypes = {
  offers: PropTypes
    .arrayOf(PropTypes
      .shape(
          {
            id: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            isPremium: PropTypes.bool.isRequired,
            isBookmark: PropTypes.bool.isRequired
          }
      )
    ),
  onDescriptionClick: PropTypes.func.isRequired
};

export default App;
