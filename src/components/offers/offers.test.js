import React from "react";
import renderer from "react-test-renderer";
import Offers from "../offers/offers.jsx";
import {offers} from "../../mocks/offers.js";

it(`Offers correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Offers cityOffers={offers}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
