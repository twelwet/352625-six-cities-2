import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import configureAPI from "./api.js";

import reducer from "./reducer/reducer.js";
import {Operation} from "./reducer/data/data";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {compose} from "recompose";

const init = () => {
  const api = configureAPI((...args) => store.dispatch(...args));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(Operation.loadOffers());

  ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>), document.querySelector(`#root`));
};

init();
