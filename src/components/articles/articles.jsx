import React from "react";
import PropTypes from "prop-types";

const Articles = ({accommodations, onDescriptionClick}) => {
  const articles = accommodations.map((item) => <article key={item.id} className="cities__place-card place-card">
    {item.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={item.image} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{item.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={item.isBookmark
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
          <span style={{width: item.rating + `%`}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a onClick={onDescriptionClick} href="#">{item.description}</a>
      </h2>
      <p className="place-card__type">{item.type}</p>
    </div>
  </article>);

  return <div className="cities__places-list places__list tabs__content">{articles}</div>;
};

Articles.propTypes = {
  accommodations: PropTypes
    .arrayOf(PropTypes
      .shape(
          {
            id: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            isPremium: PropTypes.bool.isRequired,
            isBookmark: PropTypes.bool.isRequired
          }
      )
    ),
  onDescriptionClick: PropTypes.func.isRequired
};

export default Articles;
