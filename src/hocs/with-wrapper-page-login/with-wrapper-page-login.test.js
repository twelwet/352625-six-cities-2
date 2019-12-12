import React from "react";
import renderer from "react-test-renderer";
import withWrapperPageLogin from "./with-wrapper-page-login.js";

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

jest.mock(`../../components/user/user.jsx`, () => `User`);

const MockComponent = () => {
  return <div>Mock</div>;
};

const MockComponentWrapped = withWrapperPageLogin(MockComponent);

it(`withWrappedPageLogin correctly wrap MockComponent`, () => {

  const tree = renderer
    .create(<MockComponentWrapped />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
