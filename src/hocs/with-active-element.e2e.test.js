import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offers from "../components/offers/offers.jsx";
import withActiveElement from "./with-active-element.js";

const OffersWrapped = withActiveElement(Offers);

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

describe(`OffersWrapped mount rendering`, () => {
  const onSelect = jest.fn();
  const onUnselect = jest.fn();

  const wrapper = mount(<OffersWrapped
    cityOffers={mocks}
    active={null}
    onSelect={onSelect}
    onUnselect={onUnselect}
  />);

  const offerOne = wrapper.find(`.place-card`).first();
  const offerTwo = wrapper.find(`.place-card`).last();

  it(`OffersWrapped have initial state`, () => {
    expect(wrapper.state().active).toEqual(null);
  });

  it(`OffersWrapped change state on mouse hover first offer`, () => {
    offerOne.simulate(`mouseover`);
    expect(wrapper.state().active).toEqual(0);
  });

  it(`OffersWrapped change state to initial on mouse leave first offer`, () => {
    offerOne.simulate(`mouseleave`);
    expect(wrapper.state().active).toEqual(null);
  });

  it(`OffersWrapped change state on mouse hover second offer`, () => {
    offerTwo.simulate(`mouseover`);
    expect(wrapper.state().active).toEqual(1);
  });
});
