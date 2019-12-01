import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";

import {User} from "../user/user.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`User correctly renders after relaunch`, () => {
  const props = {
    isAuthRequired: true,
    email: `user@gmail.com`
  };

  const tree = shallow(
      <User {...props}/>
  );

  expect(toJson(tree)).toMatchSnapshot();
});
