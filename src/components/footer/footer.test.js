import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer.jsx";

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`Footer correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Footer />);

  expect(tree).toMatchSnapshot();
});
