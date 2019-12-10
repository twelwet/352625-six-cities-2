import React from "react";
import renderer from "react-test-renderer";
import {User} from "./user.jsx";
import {BrowserRouter} from "react-router-dom";

const props = {
  isAuthRequired: true,
  email: `user@gmail.com`
};

it(`User correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<BrowserRouter>
      <User {...props} />
    </BrowserRouter>);

  expect(tree).toMatchSnapshot();
});
