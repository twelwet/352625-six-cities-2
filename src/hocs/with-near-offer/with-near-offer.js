import React from "react";
import PropTypes from "prop-types";

const withNearOffer = (Component) => {
  class WithNearOffer extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <article
          onMouseOver={this.props.onOfferHover}
          onMouseLeave={this.props.onOfferLeave}
          className="near-places__card place-card"
        >
          {this.props[`is_premium`] ? <div className="place-card__mark"><span>Premium</span></div> : ``}
          <div className="near-places__image-wrapper place-card__image-wrapper">
            <a href="#">
              <img className="place-card__image" src={this.props[`preview_image`]} width="260" height="200" alt="Place image"/>
            </a>
          </div>
          <Component
            {...this.props}
          />
        </article>
      );
    }
  }

  WithNearOffer.propTypes = {
    onOfferHover: PropTypes.func.isRequired,
    onOfferLeave: PropTypes.func.isRequired,
    [`is_premium`]: PropTypes.bool.isRequired,
    [`preview_image`]: PropTypes.string.isRequired,
  };

  return withNearOffer;
};

export default withNearOffer;
