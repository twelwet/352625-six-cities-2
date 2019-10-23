import React from "react";
import PropTypes from "prop-types";

const Offers = (props) => {
  return <div className="cities__places-list places__list tabs__content">
    {props.children}
  </div>;
};

Offers.propTypes = {
  children: PropTypes.array
};

export default Offers;
