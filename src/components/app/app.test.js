import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";
import App from "./app.jsx";
import {offers} from "../../mocks/offers.js";

Enzyme.configure({adapter: new Adapter()});

it(`App correctly renders after relaunch`, () => {
  const tree = shallow(<App {...offers} />);

  expect(toJson(tree)).toMatchSnapshot();
});
