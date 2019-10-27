import React from "react";
import ReactDOM from "react-dom";
import Offers from "./components/offers/offers.jsx";
import MainScreen from "./components/main-screen/main-screen.jsx";
import App from "./components/app/app.jsx";
import {offers} from "./mocks/offers.js";

const init = () => {
  ReactDOM.render(<App>
    <MainScreen>
      <Offers offers={offers} />
    </MainScreen>
  </App>, document.querySelector(`#root`));
};

init();
