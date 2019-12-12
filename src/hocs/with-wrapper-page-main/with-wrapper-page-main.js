import React from "react";
import Header from "../../components/header/header.jsx";

const withWrapperPageMain = (Component) => {
  class WithWrapperPageMain extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className="page page--gray page--main">
          <Header />
          <Component
            {...this.props}
          />
        </div>
      );
    }
  }

  WithWrapperPageMain.propTypes = {};

  return WithWrapperPageMain;
};

export default withWrapperPageMain;
