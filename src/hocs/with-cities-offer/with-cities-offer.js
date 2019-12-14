import React from "react";
import PropTypes from "prop-types";

const withCitiesOffer = (Component) => {
  class WithCitiesOffer extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <article
          className="cities__place-card place-card"
        >
          {this.props[`is_premium`] ? <div className="place-card__mark"><span>Premium</span></div> : ``}
          <div className="cities__image-wrapper place-card__image-wrapper">
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

  WithCitiesOffer.propTypes = {
    [`is_premium`]: PropTypes.bool.isRequired,
    [`preview_image`]: PropTypes.string.isRequired,
  };

  return WithCitiesOffer;
};

export default withCitiesOffer;
