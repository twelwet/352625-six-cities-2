import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer.jsx";
import {BrowserRouter} from "react-router-dom";

it(`Footer correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<BrowserRouter>
      <Footer />
    </BrowserRouter>);

  expect(tree).toMatchSnapshot();
});
