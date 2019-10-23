import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {offers} from "../../mocks/offers.js";
import {onDescriptionClick} from "../../mocks/callbacks.js";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      offers={offers}
      onDescriptionClick={onDescriptionClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
