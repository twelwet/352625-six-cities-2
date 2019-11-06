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
      }
    },
  },
  {
    id: 2,
    city: {
      location: {
        name: `Amsterdam`,
      }
    },
  },
  {
    id: 3,
    city: {
      location: {
        name: `Berlin`,
      }
    },
  },
  {
    id: 4,
    city: {
      location: {
        name: `Amsterdam`,
      }
    },
  },
];

Enzyme.configure({adapter: new Adapter()});

it(`MainScreen correctly renders after relaunch`, () => {
  const tree = shallow(<MainScreen
    citiesList={[`Amsterdam`, `Berlin`, `Helsinki`]}
    city={`Amsterdam`}
    offers={mockOffers}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
