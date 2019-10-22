import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {accommodations, onDescriptionClick} from "./mocks.js";

const init = () => {
  ReactDOM.render(
      <App
        accommodations={accommodations}
        onClick={onDescriptionClick}
      />,
      document.querySelector(`#root`)
  );
};

init();
