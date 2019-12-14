import React from "react";
import PropTypes from "prop-types";
import Offer from "../../components/offer/offer.jsx";
import withCitiesOffer from "../../hocs/with-cities-offer/with-cities-offer.js";
import withCbOffer from "../../hocs/with-cb-offer/with-cb-offer.js";

const OfferWrapped = withCbOffer(withCitiesOffer(Offer));

const Offers = (props) => {
  console.log(props.active)
  const {cityOffers, onSelect, onUnselect, onBookmarkClick} = props;
  return <div className="cities__places-list places__list tabs__content">
    {cityOffers.map((item, index) => {
      return (
        <OfferWrapped
          {...item}
          key={item[`id`]}
          onOfferHover={() => onSelect(index)}
          onOfferLeave={() => onUnselect()}
          onBookmarkClick={onBookmarkClick}
        />
      );
    })}
  </div>;
};


Offers.propTypes = {
  cityOffers: PropTypes
    .arrayOf(PropTypes
      .shape({
        [`id`]: PropTypes.number.isRequired,
        [`city`]: PropTypes.exact({
          [`name`]: PropTypes.string.isRequired,
          [`location`]: PropTypes.exact({
            [`latitude`]: PropTypes.number.isRequired,
            [`longitude`]: PropTypes.number.isRequired,
            [`zoom`]: PropTypes.number.isRequired
          })
        }),
        [`location`]: PropTypes.exact({
          [`latitude`]: PropTypes.number.isRequired,
          [`longitude`]: PropTypes.number.isRequired,
          [`zoom`]: PropTypes.number.isRequired
        }),
        [`title`]: PropTypes.string.isRequired,
        [`type`]: PropTypes.string.isRequired,
        [`price`]: PropTypes.number.isRequired,
        [`preview_image`]: PropTypes.string.isRequired,
        [`rating`]: PropTypes.number.isRequired,
        [`is_premium`]: PropTypes.bool.isRequired,
        [`is_favorite`]: PropTypes.bool.isRequired,
      })
    ),
  onSelect: PropTypes.func.isRequired,
  onUnselect: PropTypes.func.isRequired,
  onBookmarkClick: PropTypes.func.isRequired
};

export default Offers;
