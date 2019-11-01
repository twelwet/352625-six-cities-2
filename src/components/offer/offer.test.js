import React from "react";
import renderer from "react-test-renderer";
import Offer from "../offer/offer";

const onOfferHover = () => {};
const onOfferLeave = () => {};

const offer = {
  id: 1,
  city: {
    location: {
      name: `Amsterdam`,
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 12
    }
  },
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 12
  },
  description: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  price: 120,
  image: `img/apartment-01.jpg`,
  rating: 100,
  isPremium: true,
  isBookmark: false
};

it(`Offer correctly renders after relaunch`, () => {
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
          onOfferHover={onOfferHover}
          onOfferLeave={onOfferLeave}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
