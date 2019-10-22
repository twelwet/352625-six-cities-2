import React from "react";
import renderer from "react-test-renderer";
import Articles from "./articles.jsx";
import {accommodations, onDescriptionClick} from "../../mocks";

it(`Articles correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Articles
      accommodations={accommodations}
      onDescriptionClick={onDescriptionClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
