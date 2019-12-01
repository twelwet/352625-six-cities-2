import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";

it(`SignIn correctly renders after relaunch`, () => {
  const onFormSubmit = jest.fn();

  const tree = renderer.create(
      <SignIn
        onFormSubmit={onFormSubmit}
      />
  )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
