import React from "react";
import renderer from "react-test-renderer";
import Favorites from "./favorites.jsx";

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`Favorites correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Favorites />);

  expect(tree).toMatchSnapshot();
});
