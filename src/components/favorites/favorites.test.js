import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";

import Favorites from "./favorites.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Header correctly renders after relaunch`, () => {
  const tree = shallow(<Favorites />);

  expect(toJson(tree)).toMatchSnapshot();
});
