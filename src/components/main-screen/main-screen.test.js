import React from "react";
import renderer from "react-test-renderer";
import Offer from "../offer/offer";
import Offers from "../offers/offers";
import MainScreen from "./main-screen.jsx";
import {offers} from "../../mocks/offers";
import {descriptionClickHandler} from "../../mocks/callbacks";

it(`MainScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainScreen>
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
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
