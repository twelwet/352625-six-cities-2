import React from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer.jsx";

class Offers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: null};
    this.offerLeaveHandler = this.offerLeaveHandler.bind(this);
  }

  offerLeaveHandler() {
    this.setState({
      active: null
    });
  }

  render() {
    return <div className="cities__places-list places__list tabs__content">
      {this.props.offers.map((item) => {
        return (
          <Offer
            {...item}
            key={item.id}
            onOfferHover={() => this.setState({active: item.id})}
            onOfferLeave={this.offerLeaveHandler}
          />
        );
      })}
      <div>Active offer Id: {this.state.active}</div>
    </div>;
  }
}

Offers.propTypes = {
  offers: PropTypes
    .arrayOf(PropTypes
      .exact({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        isBookmark: PropTypes.bool.isRequired,
        onOfferHover: PropTypes.func.isRequired,
        onOfferLeave: PropTypes.func.isRequired
      })
    )
};

export default Offers;
