import React from "react";
import PropTypes from "prop-types";
import {getAuthFlag, getEmail} from "../../reducer/user/selectors";
import {connect} from "react-redux";

const User = (props) => {
  const {isAuthRequired, email} = props;
  return (
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="#">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{isAuthRequired ? `Sign In` : email}</span>
      </a>
    </li>
  );
};

User.propTypes = {
  isAuthRequired: PropTypes.bool.isRequired,
  email: PropTypes.string
};

const mapStateToProps = (state) => ({
  isAuthRequired: getAuthFlag(state),
  email: getEmail(state)
});

export {User};

export default connect(mapStateToProps)(User);
