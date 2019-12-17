import React from "react";
import renderer from "react-test-renderer";
import Comment from "./comment.jsx";

const props = {
  comment: `some comment text`,
  date: `2019-11-25T12:13:30.711Z`,
  id: 34,
  rating: 3.6,
  user: {
    [`avatar_url`]: `filepath`,
    id: 4,
    [`is_pro`]: true,
    name: `Barbara`
  }
};

it(`Comment correctly renders after relaunch`, () => {

  const tree = renderer
    .create(<Comment {...props} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
