import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/header.jsx";

const withWrapper = (Component) => {
  const WithWrapper = (props) => {
    return (
      <div className={props.wrapperClass}>
        <Header />
        <Component
          {...props}
        />
      </div>
    );
  };

  WithWrapper.propTypes = {
    wrapperClass: PropTypes.string.isRequired
  };

  return WithWrapper;
};

export default withWrapper;
