import React from "react";
import renderer from "react-test-renderer";
import Articles from "./articles.jsx";
import {offers} from "../../mocks/offers.js";
import {onDescriptionClick} from "../../mocks/callbacks.js";

it(`Articles correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Articles
      offers={offers}
      onDescriptionClick={onDescriptionClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
