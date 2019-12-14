import React from "react";
import PropTypes from "prop-types";

const withCbOffer = (Component) => {
  class WithCbOffer extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Component
          {...this.props}
          onMouseOver={this.props.onOfferHover}
          onMouseLeave={this.props.onOfferLeave} />
      );
    }
  }

  WithCbOffer.propTypes = {
    onOfferHover: PropTypes.func.isRequired,
    onOfferLeave: PropTypes.func.isRequired
  };

  return WithCbOffer;
};

export default withCbOffer;
