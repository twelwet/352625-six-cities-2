import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";

import Footer from "./footer.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Header correctly renders after relaunch`, () => {
  const tree = shallow(<Footer />);

  expect(toJson(tree)).toMatchSnapshot();
});
