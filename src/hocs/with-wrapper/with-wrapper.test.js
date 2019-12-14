import React from "react";
import renderer from "react-test-renderer";
import withWrapper from "./with-wrapper.js";

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

jest.mock(`../../components/user/user.jsx`, () => `User`);

const props = {
  wrapperClass: `class`
}

const MockComponent = () => {
  return <div>Mock</div>;
};

const MockComponentWrapped = withWrapper(MockComponent);

it(`withWrapped correctly wrap MockComponent`, () => {

  const tree = renderer
    .create(<MockComponentWrapped {...props} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
