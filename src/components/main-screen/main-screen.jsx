import React from "react";
import PropTypes from "prop-types";


// const accommodations = [
//   {
//     description: `Beautiful & luxurious apartment at great location`,
//     type: `Apartment`,
//     price: 120,
//     image: `img/apartment-01.jpg`,
//     width: `93%`,
//   },
//   {
//     description: `Wood and stone place`,
//     type: `Private room`,
//     price: 80,
//     image: `img/room.jpg`,
//     width: `80%`,
//   },
//   {
//     description: `Canal View Prinsengracht`,
//     type: `Apartment`,
//     price: 132,
//     image: `img/apartment-02.jpg`,
//     width: `80%`,
//   },
//   {
//     description: `Nice, cozy, warm big bed apartment`,
//     type: `Apartment`,
//     price: 180,
//     image: `img/apartment-03.jpg`,
//     width: `100%`,
//   },
//   {
//     description: `Wood and stone place`,
//     type: `Private room`,
//     price: 80,
//     image: `img/room.jpg`,
//     width: `80%`,
//   },
// ];
//
// const descriptions = accommodations.map((it) => it.description);

const Article = (description) => {
  return <article className="cities__place-card place-card">
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={`img/apartment-01.jpg`} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;120</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `93%`}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{description}</a>
      </h2>
      <p className="place-card__type">Apartment</p>
    </div>
  </article>;
};

const Articles = (props) => {
  const descriptions = props.descriptions;
  return <div>
    <Article description={descriptions[0]}/>;
    <Article description={descriptions[1]}/>;
    <Article description={descriptions[2]}/>;
    <Article description={descriptions[3]}/>;
  </div>
};

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

            <Articles {props.descriptions}/>

          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"/>
        </div>
      </div>
    </div>
  </main>;
};

MainScreen.propTypes = {descriptions: PropTypes.array};

export default MainScreen;
