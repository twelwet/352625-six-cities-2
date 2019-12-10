import React from "react";
import renderer from "react-test-renderer";
import Offer from "../offer/offer";
import {BrowserRouter} from "react-router-dom";

const onOfferHover = () => {};
const onOfferLeave = () => {};
const onBookmarkClick = () => {};

const offer = {
  [`id`]: 111,
  [`city`]: {
    [`name`]: `City Name`,
    [`location`]: {
      [`latitude`]: 52.38333,
      [`longitude`]: 4.9,
      [`zoom`]: 12
    }
  },
  [`location`]: {
    [`latitude`]: 52.3909553943508,
    [`longitude`]: 4.85309666406198,
    [`zoom`]: 12
  },
  [`title`]: `Some text`,
  [`type`]: `Apartment`,
  [`price`]: 120,
  [`preview_image`]: `img/apartment-01.jpg`,
  [`rating`]: 100,
  [`is_premium`]: true,
  [`is_favorite`]: false
};

it(`Offer correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Offer
            id={offer[`id`]}
            key={offer[`id`]}
            title={offer[`title`]}
            type={offer[`type`]}
            price={offer[`price`]}
            preview_image={offer[`preview_image`]}
            rating={offer[`rating`]}
            is_premium={offer[`is_premium`]}
            is_favorite={offer[`is_favorite`]}
            onOfferHover={onOfferHover}
            onOfferLeave={onOfferLeave}
            onBookmarkClick={onBookmarkClick}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
