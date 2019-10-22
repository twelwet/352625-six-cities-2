import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {accommodations, onDescriptionClick} from "../../mocks";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      accommodations={accommodations}
      onDescriptionClick={onDescriptionClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
