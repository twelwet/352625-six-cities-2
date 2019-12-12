import React from "react";
import Header from "../../components/header/header.jsx";

const withWrapperPage = (Component) => {
  class WithWrapperPage extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className="page">
          <Header />
          <Component
            {...this.props}
          />
        </div>
      );
    }
  }

  WithWrapperPage.propTypes = {};

  return WithWrapperPage;
};

export default withWrapperPage;
