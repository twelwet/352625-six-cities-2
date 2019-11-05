import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offers from "./offers.jsx";

const offers = [
  {
    id: 111,
    city: {
      location: {
        name: `City Name`,
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    description: `Some text`,
    type: `Apartment`,
    price: 120,
    image: `img/apartment-01.jpg`,
    rating: 100,
    isPremium: true,
    isBookmark: false
  },
  {
    id: 222,
    city: {
      location: {
        name: `City Name`,
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      }
    },
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    description: `Some text`,
    type: `Private room`,
    price: 80,
    image: `img/room.jpg`,
    rating: 50,
    isPremium: false,
    isBookmark: true,
  }
];

const mocks = offers;

Enzyme.configure({adapter: new Adapter()});

describe(`Offers mount rendering`, () => {
  const wrapper = mount(<Offers cityOffers={mocks} />);
  const offerOne = wrapper.find(`.place-card`).first();
  const offerTwo = wrapper.find(`.place-card`).last();

  it(`Offers have initial state`, () => {
    expect(wrapper.state().active).toEqual(null);
  });

  it(`Offers change state on mouse hover first offer`, () => {
    offerOne.simulate(`mouseover`);
    expect(wrapper.state().active).toEqual(111);
  });

  it(`Offers change state to initial on mouse leave first offer`, () => {
    offerOne.simulate(`mouseleave`);
    expect(wrapper.state().active).toEqual(null);
  });

  it(`Offers change state on mouse hover second offer`, () => {
    offerTwo.simulate(`mouseover`);
    expect(wrapper.state().active).toEqual(222);
  });
});
