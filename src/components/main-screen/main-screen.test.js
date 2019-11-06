import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";
import {MainScreen} from "./main-screen.jsx";

const mockOffers = [
  {
    id: 1,
    city: {
      location: {
        name: `Helsinki`,
        latitude: 60.192059,
        longitude: 24.945831,
        zoom: 12
      }
    },
    description: `Beautiful & luxurious apartment at great location`,
    type: `Private room`,
    price: 80,
    image: `img/room.jpg`,
    rating: 50,
    isPremium: false,
    isBookmark: true,
  },
  {
    id: 2,
    city: {
      location: {
        name: `Amsterdam`,
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      }
    },
    description: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    image: `img/room.jpg`,
    rating: 50,
    isPremium: false,
    isBookmark: true,
  },
  {
    id: 3,
    city: {
      location: {
        name: `Berlin`,
        latitude: 52.520008,
        longitude: 13.404954,
        zoom: 12
      }
    },
    description: `Nice, cozy, warm big bed apartment`,
    type: `Private room`,
    price: 80,
    image: `img/room.jpg`,
    rating: 50,
    isPremium: false,
    isBookmark: true,
  },
  {
    id: 4,
    city: {
      location: {
        name: `Amsterdam`,
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      }
    },
    description: `Canal View Prinsengracht`,
    type: `Private room`,
    price: 80,
    image: `img/room.jpg`,
    rating: 50,
    isPremium: false,
    isBookmark: true,
  },
];

Enzyme.configure({adapter: new Adapter()});

it(`MainScreen correctly renders after relaunch`, () => {
  const tree = shallow(<MainScreen
    citiesList={[`Amsterdam`, `Berlin`, `Helsinki`]}
    city={`Amsterdam`}
    cityOffers={mockOffers}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
