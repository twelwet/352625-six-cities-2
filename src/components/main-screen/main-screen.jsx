import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Cities from "../cities/cities.jsx";
import Offers from "../offers/offers.jsx";
import MapComponent from "../map/map.jsx";

import {ActionCreator} from "../../reducer/data/data.js";
import {getCity, getCitiesList, getOffersByCity} from "../../reducer/data/selectors.js";
import {getAuthFlag} from "../../reducer/user/selectors.js";

import withActiveElement from "../../hocs/with-active-element/with-active-element.js";


const OffersWrapped = withActiveElement(Offers);
const CitiesWrapped = withActiveElement(Cities);

const MainScreen = (props) => {
  return <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <CitiesWrapped {...props}/>
    </div>
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{props.cityOffers.length} places to stay in {props.city}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"/>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>
          <OffersWrapped
            offersList={props.cityOffers}
            offersClass={`cities__places-list places__list tabs__content`}
            offerArticleClass={`cities__place-card place-card`}
            offerDivClass={`cities__image-wrapper place-card__image-wrapper`}
            {...props}
          />
        </section>
        <div className="cities__right-section">
          {props.cityOffers.length
            ? <MapComponent
              offersList={props.cityOffers}
              mapHeight={`1000px`}
              mapClass={`cities__map map`}
              {...props}
            />
            : null}
        </div>
      </div>
    </div>
  </main>;
};

MainScreen.propTypes = {
  wrapperClass: PropTypes.string.isRequired,
  citiesList: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string,
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
  onCityClick: PropTypes.func.isRequired,
  onBookmarkClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  citiesList: getCitiesList(state),
  city: getCity(state),
  cityOffers: getOffersByCity(state),
  isAuthRequired: getAuthFlag(state),
  isError: state.isError,
  errorType: state.errorType
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => {
    dispatch(ActionCreator.changeCity(city));
  },
  onBookmarkClick: ({offerId, favoriteStatus}) => {
    dispatch(ActionCreator.toggleFavorite({offerId, favoriteStatus}));
  }
});

export {MainScreen};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

