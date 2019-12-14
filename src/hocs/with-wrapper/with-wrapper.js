import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/header.jsx";

const withWrapper = (Component) => {
  class WithWrapper extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className={this.props.wrapperClass}>
          <Header />
          <Component
            {...this.props}
          />
        </div>
      );
    }
  }

  WithWrapper.propTypes = {
    wrapperClass: PropTypes.string.isRequired
  };

  return WithWrapper;
};

export default withWrapper;
