import React from "react";
import renderer from "react-test-renderer";
import Offers from "../offers/offers.jsx";

const offers = [
  {
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
    [`preview_image`]: `img/img-1.jpg`,
    [`rating`]: 100,
    [`is_premium`]: true,
    [`is_favorite`]: false
  },
  {
    [`id`]: 222,
    [`city`]: {
      [`name`]: `City Name 2`,
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
    [`type`]: `House`,
    [`price`]: 120,
    [`preview_image`]: `img/img-2.jpg`,
    [`rating`]: 100,
    [`is_premium`]: false,
    [`is_favorite`]: true
  }
];


it(`Offers correctly renders after relaunch`, () => {
  const renderActiveOffer = jest.fn();
  const showActiveId = jest.fn();

  const tree = renderer
    .create(<Offers
      cityOffers={offers}
      onSelect={renderActiveOffer}
      onUnselect={showActiveId}
    />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
