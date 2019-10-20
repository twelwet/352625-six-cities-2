import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";
import {accommodations} from "../../mocks";

it(`MainScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainScreen
      accommodations={accommodations}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
