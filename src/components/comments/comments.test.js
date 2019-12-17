import React from "react";
import renderer from "react-test-renderer";
import Comments from "./comments.jsx";

const props = {
  comments: [
    {
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
    },
    {
      comment: `other comment text`,
      date: `2019-11-25T12:15:45.711Z`,
      id: 32,
      rating: 2.9,
      user: {
        [`avatar_url`]: `filepath`,
        id: 5,
        [`is_pro`]: false,
        name: `Andrew`
      }
    }
  ]
};

it(`Comments correctly renders after relaunch`, () => {

  const tree = renderer
    .create(<Comments {...props} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
