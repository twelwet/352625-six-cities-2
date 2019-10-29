import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offers from "./offers.jsx";

const mocks = [
  {
    id: 1,
    description: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    image: `img/apartment-01.jpg`,
    rating: 100,
    isPremium: true,
    isBookmark: false
  },
  {
    id: 2,
    description: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    image: `img/apartment-01.jpg`,
    rating: 100,
    isPremium: true,
    isBookmark: false
  }
];

Enzyme.configure({adapter: new Adapter()});

describe(`Offers mount rendering`, () => {
  const wrapper = mount(<Offers offers={mocks} />);

  it(`Offers have initial state`, () => {
    expect(wrapper.state().active).toEqual(null);
  });

  it(`Offers change state on hover first offer`, () => {
    const offerOne = wrapper.find(`.place-card`).first();
    offerOne.simulate(`mouseover`);
    expect(wrapper.state().active).toEqual(1);
  });

  it(`Offers change state to initial on mouse leave first offer`, () => {
    const offerOne = wrapper.find(`.place-card`).first();
    offerOne.simulate(`mouseleave`);
    expect(wrapper.state().active).toEqual(null);
  });

});
