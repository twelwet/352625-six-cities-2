import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";
import MapComponent from "./map.jsx";
import {offers} from "../../mocks/offers.js";

Enzyme.configure({adapter: new Adapter()});

it(`MapComponent correctly renders after relaunch`, () => {
  const tree = mount(<MapComponent cityOffers={offers} />);

  expect(toJson(tree)).toMatchSnapshot();
});
