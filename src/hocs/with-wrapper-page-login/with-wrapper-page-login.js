import React from "react";
import Header from "../../components/header/header.jsx";

const withWrapperPageLogin = (Component) => {
  class WithWrapperPageLogin extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className="page page--gray page--login">
          <Header />
          <Component
            {...this.props}
          />
        </div>
      );
    }
  }

  WithWrapperPageLogin.propTypes = {};

  return WithWrapperPageLogin;
};

export default withWrapperPageLogin;
