import React from "react";
import ReactDOM from "react-dom";
import Offer from "./components/offer/offer.jsx";
import Offers from "./components/offers/offers.jsx";
import MainScreen from "./components/main-screen/main-screen.jsx";
import App from "./components/app/app.jsx";
import {offers} from "./mocks/offers.js";
import {descriptionClickHandler} from "./mocks/callbacks.js";

const init = () => {
  ReactDOM.render(<App>
    <MainScreen>
      <Offers>
        {offers.map((item) => {
          return <Offer
            id={item.id}
            key={item.id}
            description={item.description}
            type={item.type}
            price={item.price}
            image={item.image}
            rating={item.rating}
            isPremium={item.isPremium}
            isBookmark={item.isBookmark}
            descriptionClickHandler={descriptionClickHandler}
          />;
        })}
      </Offers>
    </MainScreen>
  </App>, document.querySelector(`#root`));
};

init();
