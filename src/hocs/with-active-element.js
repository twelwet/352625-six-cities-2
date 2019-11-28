import React from "react";

const withActiveElement = (Component) => {
  class WithActiveElement extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {active: null};
      this.elementSelectHandler = this.elementSelectHandler.bind(this);
      this.elementUnselectHandler = this.elementUnselectHandler.bind(this);
    }

    elementSelectHandler(index) {
      this.setState({
        active: index
      });
    }

    elementUnselectHandler() {
      this.setState({
        active: null
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          active={this.state.active}
          onSelect={this.elementSelectHandler}
          onUnselect={this.elementUnselectHandler}
        />
      );
    }
  }

  WithActiveElement.propTypes = {};

  return WithActiveElement;
};

export default withActiveElement;
