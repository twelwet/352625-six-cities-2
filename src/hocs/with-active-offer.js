import React from "react";
import Offer from "../components/offer/offer.jsx";

const withActiveOffer = (Component) => {
  class WithActiveOffer extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {active: null};
    }

    render() {
      return (
        <Component {...this.props}>
          renderActiveOffer={((item) => {
            return (
              <Offer
                {...item}
                key={item.id}
                onOfferHover={() => this.setState({active: item.id})}
                onOfferLeave={() => this.setState({active: null})}
              />
            );
          })}
          <div>Active offer Id: {this.state.active}</div>
        </Component>
      );
    }
  }

  WithActiveOffer.propTypes = {};

  return WithActiveOffer;
};

export default withActiveOffer;
