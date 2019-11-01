import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";
import MainScreen from "./main-screen.jsx";
import {offers} from "../../mocks/offers.js";

Enzyme.configure({adapter: new Adapter()});

it(`MainScreen correctly renders after relaunch`, () => {
  const tree = shallow(<MainScreen offers={offers} />);

  expect(toJson(tree)).toMatchSnapshot();
});
