import React from "react";
import Offers from "../offers/offers.jsx";
import MapComponent from "../map/map.jsx";
import PropTypes from "prop-types";

const MainScreen = (props) => {
  return <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Paris</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Cologne</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Brussels</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item tabs__item--active">
              <span>Amsterdam</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Hamburg</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Dusseldorf</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
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
          <div className="cities__places-list places__list tabs__content">
            <Offers {...props}/>
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <MapComponent {...props}/>
          </section>
        </div>
      </div>
    </div>
  </main>;
};

MainScreen.propTypes = {
  offers: PropTypes
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
    )
};

export default MainScreen;
