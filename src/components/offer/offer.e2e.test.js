import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offer from "./offer.jsx";

Enzyme.configure({adapter: new Adapter()});

const props = {
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
  [`is_favorite`]: true,
  onBookmarkClick: jest.fn(({offerId, favoriteStatus}) => ({offerId, favoriteStatus}))
};

it(`onBookmarkClick callback is called 1 time with 1 click event`, () => {
  const OfferComponent = shallow(<Offer
    {...props}
  />);

  const offerElement = OfferComponent.find(`.place-card__info`);

  const btn = offerElement.find(`.place-card__bookmark-button`);
  btn.simulate(`click`);

  expect(props.onBookmarkClick).toHaveBeenCalledTimes(1);
  expect(props.onBookmarkClick).toHaveBeenCalledWith({offerId: 111, favoriteStatus: true});
});

