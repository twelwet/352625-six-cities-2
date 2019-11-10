import React from "react";
import PropTypes from "prop-types";
import Offer from "../../components/offer/offer.jsx";

const Offers = (props) => {
  const {cityOffers, onSelect, onUnselect} = props;
  return <div className="cities__places-list places__list tabs__content">
    {cityOffers.map((item, index) => {
      return (
        <Offer
          {...item}
          key={item.id}
          onOfferHover={() => onSelect(index)}
          onOfferLeave={() => onUnselect()}
        />
      );
    })}
  </div>;
};


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
  onSelect: PropTypes.func.isRequired,
  onUnselect: PropTypes.func.isRequired
};

export default Offers;
