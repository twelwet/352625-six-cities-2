import React from "react";
import renderer from "react-test-renderer";
import Offers from "../offers/offers";
import MainScreen from "./main-screen.jsx";

const testOffers = [
  {
    id: 1,
    description: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    image: `img/apartment-01.jpg`,
    rating: 100,
    isPremium: true,
    isBookmark: false,
    onOfferHover: () => {},
    onOfferLeave: () => {}
  },
  {
    id: 2,
    description: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    image: `img/room.jpg`,
    rating: 50,
    isPremium: false,
    isBookmark: true,
    onOfferHover: () => {},
    onOfferLeave: () => {}
  },
  {
    id: 3,
    description: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 132,
    image: `img/apartment-02.jpg`,
    rating: 80,
    isPremium: false,
    isBookmark: false,
    onOfferHover: () => {},
    onOfferLeave: () => {}
  },
];

it(`MainScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainScreen>
      <Offers offers={testOffers} />
    </MainScreen>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
