import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offers from "./offers.jsx";
import {offers} from "../../mocks/offers.js";

const mocks = offers;

Enzyme.configure({adapter: new Adapter()});

describe(`Offers mount rendering`, () => {
  const wrapper = mount(<Offers offers={mocks} />);
  const offerOne = wrapper.find(`.place-card`).first();

  it(`Offers have initial state`, () => {
    expect(wrapper.state().active).toEqual(null);
  });

  it(`Offers change state on mouse hover first offer`, () => {
    offerOne.simulate(`mouseover`);
    expect(wrapper.state().active).toEqual(1);
  });

  it(`Offers change state to initial on mouse leave first offer`, () => {
    offerOne.simulate(`mouseleave`);
    expect(wrapper.state().active).toEqual(null);
  });

});
