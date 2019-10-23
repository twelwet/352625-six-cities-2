import React from "react";
import renderer from "react-test-renderer";
import Offer from "../offer/offer";
import Offers from "./offers.jsx";
import {offers} from "../../mocks/offers.js";
import {descriptionClickHandler} from "../../mocks/callbacks.js";

it(`Articles correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
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
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
