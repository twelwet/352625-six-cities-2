import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";
import {offers} from "../../mocks/offers";
import {onDescriptionClick} from "../../mocks/callbacks";

it(`MainScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainScreen
      offers={offers}
      onDescriptionClick={onDescriptionClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
