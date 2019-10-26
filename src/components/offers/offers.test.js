import React from "react";
import renderer from "react-test-renderer";
import Offer from "../offer/offer";
import {offers} from "../../mocks/offers.js";

const onOfferHover = () => {};
const onOfferLeave = () => {};

it(`Offers correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<div className="cities__places-list places__list tabs__content">
      {offers.map((item) => {
        return (
          <Offer
            {...item}
            key={item.id}
            onOfferHover={onOfferHover}
            onOfferLeave={onOfferLeave}
          />
        );
      })}
      <div>Active offer Id: 1</div>
    </div>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
