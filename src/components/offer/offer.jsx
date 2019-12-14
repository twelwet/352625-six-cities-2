import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Offer = (props) => {
  return <article
    onMouseOver={props.onOfferHover}
    onMouseLeave={props.onOfferLeave}
    className="cities__place-card place-card"
  >
    {props[`is_premium`] ? <div className="place-card__mark"><span>Premium</span></div> : ``}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={props[`preview_image`]} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{props[`price`]}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          onClick={() => props.onBookmarkClick({offerId: props[`id`], favoriteStatus: props[`is_favorite`]})}
          className={props[`is_favorite`]
            ? `place-card__bookmark-button place-card__bookmark-button--active button`
            : `place-card__bookmark-button button`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: props[`rating`] * 100 / 5 + `%`}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${props[`id`]}`}>{props[`title`]}</Link>
      </h2>
      <p className="place-card__type">{props[`type`]}</p>
    </div>
  </article>;
};

Offer.propTypes = {
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
  onOfferHover: PropTypes.func.isRequired,
  onOfferLeave: PropTypes.func.isRequired,
  onBookmarkClick: PropTypes.func.isRequired
};

export default Offer;

