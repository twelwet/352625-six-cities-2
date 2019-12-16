import React from "react";
import renderer from "react-test-renderer";
import Loading from "./loading.jsx";

it(`Loading correctly renders after relaunch`, () => {

  const tree = renderer
    .create(<Loading />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
