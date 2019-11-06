import React from "react";
import PropTypes from "prop-types";

const Cities = (props) => {
  const {onCityClick, citiesList, city} = props;
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
                onCityClick(item);
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
  citiesList: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  onCityClick: PropTypes.func
};

export default Cities;
