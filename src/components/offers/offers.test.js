import React from "react";
import renderer from "react-test-renderer";
import Offers from "../offers/offers.jsx";
import {offers} from "../../mocks/offers.js";

it(`Offers correctly renders after relaunch`, () => {
  const renderActiveOffer = jest.fn();
  const showActiveId = jest.fn();

  const tree = renderer
    .create(<Offers
      cityOffers={offers}
      renderActiveOffer={renderActiveOffer}
      showActiveId={showActiveId}
    />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
