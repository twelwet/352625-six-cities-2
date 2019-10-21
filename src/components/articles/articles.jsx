import React from "react";
import PropTypes from "prop-types";

const Articles = (props) => {
  const {accommodations} = props;
  const data = accommodations.map((it) => [it.id, it.description, it.type, it.price, it.image, it.rating, it.isPremium, it.isBookmark]);
  let articles = data.map(([id, description, type, price, image, rating, isPremium, isBookmark]) => <article key={id} className="cities__place-card place-card">
    {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={image} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={isBookmark
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
          <span style={{width: rating + `%`}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{description}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>);

  return <div>{articles}</div>;
};

Articles.propTypes = {
  accommodations: PropTypes
    .arrayOf(PropTypes
      .shape(
          {
            id: PropTypes.number,
            description: PropTypes.string,
            type: PropTypes.string,
            price: PropTypes.number,
            image: PropTypes.string,
            rating: PropTypes.number,
            isPremium: PropTypes.bool,
            isBookmark: PropTypes.bool
          }
      )
    )
};

export default Articles;
