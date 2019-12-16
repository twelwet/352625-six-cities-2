import React from "react";
import PropTypes from "prop-types";

const Comment = (props) => {
  const {comment, date, rating, user} = props;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={props.user[`avatar_url`]} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: rating * 100 / 5 + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">
          April 2019
          {date}
        </time>
      </div>
    </li>
  );
};

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    [`avatar_url`]: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    [`is_pro`]: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default Comment;
