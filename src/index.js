import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {reducer} from "./reducer.js";
import {Provider} from "react-redux";
import {createStore} from "redux";

const init = () => {
  const store = createStore(
      reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );

  ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>), document.querySelector(`#root`));
};

init();
