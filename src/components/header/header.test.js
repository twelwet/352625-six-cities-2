import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

jest.mock(`../../components/user/user.jsx`, () => `User`);

it(`Header correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Header />);

  expect(tree).toMatchSnapshot();
});
