import React from "react";
import renderer from "react-test-renderer";
import Favorites from "./favorites.jsx";

it(`Favorites correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Favorites />);

  expect(tree).toMatchSnapshot();
});
