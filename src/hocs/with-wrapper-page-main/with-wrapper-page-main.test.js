import React from "react";
import renderer from "react-test-renderer";
import withWrapperPageMain from "./with-wrapper-page-main.js";

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

jest.mock(`../../components/user/user.jsx`, () => `User`);

const MockComponent = () => {
  return <div>Mock</div>;
};

const MockComponentWrapped = withWrapperPageMain(MockComponent);

it(`withWrappedPageMain correctly wrap MockComponent`, () => {

  const tree = renderer
    .create(<MockComponentWrapped />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
