import React from "react";
import renderer from "react-test-renderer";
import {OfferDetails} from "./offer-details.jsx";

const props = {
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
  onBookmarkClick: () => {}
};

it(`OfferDetails correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <OfferDetails {...props} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
