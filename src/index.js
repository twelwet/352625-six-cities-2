import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {offers} from "./mocks/offers.js";
import {onDescriptionClick} from "./mocks/callbacks.js";

const init = () => {
  ReactDOM.render(
      <App
        offers={offers}
        onDescriptionClick={onDescriptionClick}
      />,
      document.querySelector(`#root`)
  );
};

init();
