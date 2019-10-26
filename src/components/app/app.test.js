import React from "react";
import renderer from "react-test-renderer";
import Offers from "../offers/offers";
import MainScreen from "../main-screen/main-screen";
import App from "./app.jsx";

const testOffers = [
  {
    id: 1,
    description: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    image: `img/apartment-01.jpg`,
    rating: 100,
    isPremium: true,
    isBookmark: false
  },
  {
    id: 2,
    description: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    image: `img/room.jpg`,
    rating: 50,
    isPremium: false,
    isBookmark: true
  },
  {
    id: 3,
    description: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 132,
    image: `img/apartment-02.jpg`,
    rating: 80,
    isPremium: false,
    isBookmark: false
  },
];

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App>
      <MainScreen>
        <Offers offers={testOffers} />
      </MainScreen>
    </App>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
