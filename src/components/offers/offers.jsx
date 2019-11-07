import React from "react";
import PropTypes from "prop-types";

class Offers extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="cities__places-list places__list tabs__content">
      {this.props.cityOffers.map((item) => {
        this.props.renderActiveOffer(item);
      })}
    </div>;
  }
}

Offers.propTypes = {
  cityOffers: PropTypes
    .arrayOf(PropTypes
      .exact({
        id: PropTypes.number.isRequired,
        city: PropTypes.exact({
          location: PropTypes.exact({
            name: PropTypes.string.isRequired,
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired
          })
        }),
        location: PropTypes.exact({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired
        }),
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        isBookmark: PropTypes.bool.isRequired,
      })
    ),
  renderActiveOffer: PropTypes.func
};

export default Offers;
