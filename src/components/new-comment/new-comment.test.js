import React from "react";
import renderer from "react-test-renderer";
import NewComment from "./new-comment.jsx";


it(`NewComment correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<NewComment />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
