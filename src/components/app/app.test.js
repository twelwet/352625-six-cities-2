import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {accommodations} from "../../mocks";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      accommodations={accommodations}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
