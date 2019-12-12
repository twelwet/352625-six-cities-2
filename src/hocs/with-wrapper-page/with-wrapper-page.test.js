import React from "react";
import renderer from "react-test-renderer";
import withWrapperPage from "./with-wrapper-page.js";

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

jest.mock(`../../components/user/user.jsx`, () => `User`);

const MockComponent = () => {
  return <div>Mock</div>;
};

const MockComponentWrapped = withWrapperPage(MockComponent);

it(`withWrappedPage correctly wrap MockComponent`, () => {

  const tree = renderer
    .create(<MockComponentWrapped />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
