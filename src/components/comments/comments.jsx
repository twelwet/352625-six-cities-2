import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import Comment from "../comment/comment.jsx";
import NewComment from "../new-comment/new-comment.jsx";

const MAX_QUANTITY = 10;

const prepareComments = (comments, maxQuantity) => {
  comments
    .sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf());
  if (comments.length > maxQuantity) {
    return comments.slice(0, maxQuantity);
  }
  return comments;
};

const Comments = (props) => {
  const {comments, isAuthRequired} = props;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {prepareComments(comments, MAX_QUANTITY).map((item, index) => (
          <Comment key={index} {...item} />
        ))}
      </ul>
      {!isAuthRequired ? <NewComment /> : ``}
    </section>
  );
};

Comments.propTypes = {
  isAuthRequired: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
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
  }))
};

export default Comments;
