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
        <div>
          <Component
            {...this.props}
            active={this.state.active}
            onSelect={this.elementSelectHandler}
            onUnselect={this.elementUnselectHandler}
          />
          <div>Active element: {this.state.active}</div>
        </div>
      );
    }
  }

  WithActiveElement.propTypes = {};

  return WithActiveElement;
};

export default withActiveElement;
