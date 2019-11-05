import React from "react";
import PropTypes from "prop-types";

const Cities = (props) => {
  const {onCityClick, citiesList, city, offers} = props;
  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {citiesList.map((item, i) => {
        return (
          <li key={i} className="locations__item">
            {city === item
              ? <a className="locations__item-link tabs__item--active" href="#">
                <span>{item}</span></a>
              : <a onClick={(evt) => {
                evt.preventDefault();
                onCityClick(offers, item);
              }} className="locations__item-link tabs__item" href="#">
                <span>{item}</span></a>
            }
          </li>
        );
      })}
    </ul>
  </section>;
};

Cities.propTypes = {
  citiesList: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string,
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
    ),
  onCityClick: PropTypes.func
};

export default Cities;
