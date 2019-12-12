import React from "react";
import renderer from "react-test-renderer";
import {User} from "./user.jsx";

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

const props = {
  isAuthRequired: true,
  email: `user@gmail.com`
};

it(`User correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<User {...props} />);

  expect(tree).toMatchSnapshot();
});
