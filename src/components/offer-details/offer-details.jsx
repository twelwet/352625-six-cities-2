import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Offers from "../offers/offers.jsx";
import Loading from "../loading/loading.jsx";
import Comments from "../comments/comments.jsx";
import MapComponent from "../map/map.jsx";

import {getOfferById, getNearestOffers, getComments} from "../../reducer/data/selectors.js";
import {getAuthFlag} from "../../reducer/user/selectors.js";
import {Operation, ActionCreator} from "../../reducer/data/data.js";

import withActiveElement from "../../hocs/with-active-element/with-active-element.js";


const OffersWrapped = withActiveElement(Offers);

const Image = {
  MAX_COUNT: 6
};

const defaultProps = {
  isAuthRequired: ``,
  wrapperClass: ``,
  id: ``,
  offer: {
    images: [],
    title: ``,
    rating: ``,
    [`is_favorite`]: ``,
    bedrooms: ``,
    [`max_adults`]: ``,
    type: ``,
    price: ``,
    goods: ``,
    host: {
      [`avatar_url`]: ``,
      id: ``,
      [`is_pro`]: ``,
      name: ``
    },
    description: ``
  },
  nearestOffers: [],
  onBookmarkClick: () => {},
  onComponentMount: () => {}
};

class OfferDetails extends React.PureComponent {
  constructor(props = defaultProps) {
    super(props);
  }

  componentDidMount() {
    const {id, onComponentMount} = this.props;

    onComponentMount(id);
  }

  componentDidUpdate(prevProps) {
    const {id, onComponentMount} = this.props;
    if (id !== prevProps.id) {
      onComponentMount(id);
    }
  }

  render() {
    const {id, offer, nearestOffers, onBookmarkClick, comments, isAuthRequired} = this.props;

    if (!offer) {
      return <Loading />;
    }

    const {images, title, rating, bedrooms, type, price, goods, host, description} = offer;

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
              {offer[`is_premium`] ? <div className="property__mark"><span>Premium</span></div> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  onClick={() => {
                    onBookmarkClick({
                      offerId: id,
                      favoriteStatus: offer[`is_favorite`]
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
                  Max {offer[`max_adults`]} adults
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
              <Comments
                comments={comments}
                isAuthRequired={isAuthRequired}
              />
            </div>
          </div>
          <MapComponent
            offersList={nearestOffers}
            mapHeight={`600px`}
            mapClass={`property__map map`}
            {...this.props}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersWrapped
              offersList={nearestOffers}
              offersClass={`near-places__list places__list`}
              offerArticleClass={`near-places__card place-card`}
              offerDivClass={`near-places__image-wrapper place-card__image-wrapper`}
              {...this.props}
            />
          </section>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state, props) => ({
  isAuthRequired: getAuthFlag(state),
  offer: getOfferById(state, props.id),
  nearestOffers: getNearestOffers(state, props.id),
  comments: getComments(state)
});

const mapDispatchToProps = (dispatch) => ({
  onBookmarkClick: ({offerId, favoriteStatus}) => {
    dispatch(ActionCreator.toggleFavorite({offerId, favoriteStatus}));
  },
  onComponentMount: (offerId) => {
    dispatch(Operation.loadCommentsById(offerId));
  }
});

OfferDetails.propTypes = {
  isAuthRequired: PropTypes.bool.isRequired,
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
  comments: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      [`avatar_url`]: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      [`is_pro`]: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    })
  })),
  onBookmarkClick: PropTypes.func.isRequired,
  onComponentMount: PropTypes.func.isRequired
};

export {OfferDetails};

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);


