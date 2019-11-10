import React from "react";
import PropTypes from "prop-types";

const Cities = (props) => {
  const {citiesList, onCityClick, active, onSelect} = props;
  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {citiesList.map((item, index) => {
        return (
          <li key={index} className="locations__item">
            {index === (active || 0) // active === null by default
              ? <a className="locations__item-link tabs__item tabs__item--active" href="#">
                <span>{item}</span></a>
              : <a onClick={(evt) => {
                evt.preventDefault();
                onSelect(index);
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
  onCityClick: PropTypes.func.isRequired,
  active: PropTypes.number,
  onSelect: PropTypes.func.isRequired
};

export default Cities;
