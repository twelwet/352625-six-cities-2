import React from "react";
import ReactDOM from "react-dom";
import MainScreen from "./components/main-screen/main-screen.jsx";
import App from "./components/app/app.jsx";
import {offers} from "./mocks/offers.js";

const init = () => {
  ReactDOM.render(<App>
    <MainScreen offers={offers}/>
  </App>, document.querySelector(`#root`));
};

init();
