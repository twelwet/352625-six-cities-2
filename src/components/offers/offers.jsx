import React from "react";
import PropTypes from "prop-types";
import Offer from "../../components/offer/offer.jsx";

const Offers = (props) => {
  const {offersList, onSelect, onUnselect, onBookmarkClick, offersClass, offerArticleClass, offerDivClass} = props;
  return <div className={offersClass}>
    {offersList.map((item, index) => {
      return (
        <Offer
          {...item}
          key={item[`id`]}
          onOfferHover={() => onSelect(index)}
          onOfferLeave={() => onUnselect()}
          onBookmarkClick={onBookmarkClick}
          offerArticleClass={offerArticleClass}
          offerDivClass={offerDivClass}
        />
      );
    })}
  </div>;
};


Offers.propTypes = {
  offersClass: PropTypes.string.isRequired,
  offerArticleClass: PropTypes.string.isRequired,
  offerDivClass: PropTypes.string.isRequired,
  offersList: PropTypes
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
