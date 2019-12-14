import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Offers from "../offers/offers.jsx";

import {getOfferById, getNearestOffers} from "../../reducer/data/selectors.js";
import {ActionCreator} from "../../reducer/data/data.js";

import withActiveElement from "../../hocs/with-active-element/with-active-element.js";
import MapComponent from "../map/map.jsx";


const OffersWrapped = withActiveElement(Offers);

const Image = {
  MAX_COUNT: 6
};

const OfferDetails = (props) => {
  const {images, title, rating, bedrooms, type, price, goods, host, description} = props.offer;
  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.slice(0, Image.MAX_COUNT).map((item, index) => {
              return (
                <div key={index} className="property__image-wrapper">
                  <img className="property__image" src={item} alt="Photo studio"/>
                </div>
              );
            })}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {props.offer[`is_premium`] ? <div className="property__mark"><span>Premium</span></div> : ``}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button
                onClick={() => {
                  props.onBookmarkClick({
                    offerId: props.id,
                    favoriteStatus: props.offer[`is_favorite`]
                  });
                }}
                className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"/>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: rating * 100 / 5 + `%`}}/>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {props.offer[`max_adults`]} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((item, index) => {
                  return (
                    <li key={index} className="property__inside-item">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={`/${host[`avatar_url`]}`} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
                {host[`is_pro`] ? <span className="property__user-status">Pro</span> : ``}
              </div>
              <div className="property__description">
                {description.split(`.`).map((item, index) => {
                  return (
                    <p key={index} className="property__text">{item}.</p>
                  );
                })}
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
              <ul className="reviews__list">
                <li className="reviews__item">
                  <div className="reviews__user user">
                    <div className="reviews__avatar-wrapper user__avatar-wrapper">
                      <img className="reviews__avatar user__avatar" src="/img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
                    </div>
                    <span className="reviews__user-name">
                      Max
                    </span>
                  </div>
                  <div className="reviews__info">
                    <div className="reviews__rating rating">
                      <div className="reviews__stars rating__stars">
                        <span style={{width: `94%`}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <p className="reviews__text">
                      A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
                      The building is green and from 18th century.
                    </p>
                    <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                  </div>
                </li>
              </ul>
              <form className="reviews__form form" action="#" method="post">
                <label className="reviews__label form__label" htmlFor="review">Your review</label>
                <div className="reviews__rating-form form__rating">
                  <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                  <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>
                  <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                  <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>
                  <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                  <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>
                  <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                  <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>
                  <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                  <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>
                </div>
                <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"/>
                <div className="reviews__button-wrapper">
                  <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and
                    describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                  </p>
                  <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                </div>
              </form>
            </section>
          </div>
        </div>
        {props.nearestOffers.length
          ? <MapComponent
            offersList={props.nearestOffers}
            mapHeight={`600px`}
            mapClass={`property__map map`}
            {...props}
          />
          : null}
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersWrapped
            offersList={props.nearestOffers}
            offersClass={`near-places__list places__list`}
            offerArticleClass={`near-places__card place-card`}
            offerDivClass={`near-places__image-wrapper place-card__image-wrapper`}
            {...props}
          />
        </section>
      </div>
    </main>
  );
};

const mapStateToProps = (state, props) => ({
  offer: getOfferById(state, props.id),
  nearestOffers: getNearestOffers(state, props.id)
});

const mapDispatchToProps = (dispatch) => ({
  onBookmarkClick: ({offerId, favoriteStatus}) => {
    dispatch(ActionCreator.toggleFavorite({offerId, favoriteStatus}));
  }
});

OfferDetails.propTypes = {
  wrapperClass: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  offer: PropTypes
    .shape({
      images: PropTypes.arrayOf(PropTypes.string.isRequired),
      title: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      [`is_favorite`]: PropTypes.bool.isRequired,
      bedrooms: PropTypes.number.isRequired,
      [`max_adults`]: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      goods: PropTypes.arrayOf(PropTypes.string).isRequired,
      host: PropTypes.shape({
        [`avatar_url`]: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        [`is_pro`]: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
      }),
      description: PropTypes.string.isRequired
    }),
  nearestOffers: PropTypes
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
  onBookmarkClick: PropTypes.func.isRequired
};

export {OfferDetails};

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);


