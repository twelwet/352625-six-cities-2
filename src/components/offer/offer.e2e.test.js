import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offer from "./offer.jsx";

Enzyme.configure({adapter: new Adapter()});

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

describe(`Offer's callbacks are called by mouse events`, () => {
  const onOfferHover = jest.fn(() => {});
  const onOfferLeave = jest.fn(() => {});
  const onBookmarkClick = jest.fn(() => {});

  const offerComponent = shallow(<Offer
    {...offer}
    onOfferHover={onOfferHover}
    onOfferLeave={onOfferLeave}
    onBookmarkClick={onBookmarkClick}
  />);

  const offerElement = offerComponent.find(`.place-card`);

  it(`Callbacks are called 0 times without mouse events`, () => {
    expect(onOfferHover).toHaveBeenCalledTimes(0);
    expect(onOfferLeave).toHaveBeenCalledTimes(0);
    expect(onBookmarkClick).toHaveBeenCalledTimes(0);
  });

  it(`MouseOver / MouseLeave callbacks are called 5 times with 5 mouse events`, () => {
    offerElement.simulate(`mouseover`);
    offerElement.simulate(`mouseleave`);
    offerElement.simulate(`mouseover`);
    offerElement.simulate(`mouseleave`);
    offerElement.simulate(`mouseover`);

    expect(onOfferHover).toHaveBeenCalledTimes(3);
    expect(onOfferLeave).toHaveBeenCalledTimes(2);
  });

  it(`onBookmarkClick callback is called 1 time with 1 click event`, () => {
    const btn = offerElement.find(`.place-card__bookmark-button`);
    btn.simulate(`click`, {
      preventDefault: () => {}
    });

    expect(onBookmarkClick).toHaveBeenCalledTimes(1);
  });
});
