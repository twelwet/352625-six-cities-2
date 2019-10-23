import React from "react";
import renderer from "react-test-renderer";
import {descriptionClickHandler} from "../../mocks/callbacks.js";
import Offer from "../offer/offer";

const offer = {
  id: 1,
  description: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  price: 120,
  image: `img/apartment-01.jpg`,
  rating: 100,
  isPremium: true,
  isBookmark: false
};

it(`Article correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <Offer
          id={offer.id}
          key={offer.id}
          description={offer.description}
          type={offer.type}
          price={offer.price}
          image={offer.image}
          rating={offer.rating}
          isPremium={offer.isPremium}
          isBookmark={offer.isBookmark}
          descriptionClickHandler={descriptionClickHandler}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
