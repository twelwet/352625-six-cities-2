import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";
import {App} from "./app.jsx";

const props = {
  isAuthRequired: true,
  onFormSubmit: jest.fn,
};

Enzyme.configure({adapter: new Adapter()});

it(`App correctly renders after relaunch`, () => {
  const tree = shallow(<App {...props} />);

  expect(toJson(tree)).toMatchSnapshot();
});
