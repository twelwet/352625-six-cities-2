import React from "react";
import renderer from "react-test-renderer";
import {OfferDetails} from "./offer-details.jsx";

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

jest.mock(`../../components/map/map.jsx`, () => `MapComponent`);

const props = {
  isAuthRequired: true,
  wrapperClass: `something`,
  id: 1,
  offer: {
    images: [`img-1.jpg`, `img-2.jpg`, `img-3.jpg`],
    title: `Title`,
    rating: 4.3,
    [`is_favorite`]: true,
    bedrooms: 2,
    [`max_adults`]: 3,
    type: `flat`,
    price: 148,
    goods: [`Wifi`, `Heating`, `Kitchen`],
    host: {
      [`avatar_url`]: `path to file`,
      id: 24,
      [`is_pro`]: false,
      name: `Name`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`
  },
  nearestOffers: [
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
  ],
  comments: [
    {
      comment: `some text about property 1`,
      date: `2019-11-25T12:13:30.711Z`,
      id: 1,
      rating: 4.5,
      user: {
        [`avatar_url`]: `filepath`,
        id: 12,
        [`is_pro`]: true,
        name: `Pamela`
      }
    },
    {
      comment: `some text about property 2`,
      date: `2019-11-25T12:13:30.711Z`,
      id: 2,
      rating: 3.8,
      user: {
        [`avatar_url`]: `filepath`,
        id: 13,
        [`is_pro`]: false,
        name: `James`
      }
    },
  ],
  onBookmarkClick: () => {},
  onComponentMount: () => {}
};

it(`OfferDetails correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <OfferDetails {...props} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
