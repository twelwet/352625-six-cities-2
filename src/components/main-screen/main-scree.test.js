import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";
import {accommodations, onDescriptionClick} from "../../mocks";

it(`MainScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainScreen
      accommodations={accommodations}
      onDescriptionClick={onDescriptionClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
