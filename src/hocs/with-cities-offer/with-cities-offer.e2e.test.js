import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withCitiesOffer from "./with-cities-offer.js";

Enzyme.configure({adapter: new Adapter()});

const MockComponent = (props) => {
  return (
    <div
      className="hover-me"
      {...props}
    >Hover Me
    </div>
  );
};

describe(`MockComponentWrapped's callbacks are called by mouse events`, () => {
  const onOfferHover = jest.fn(() => {});
  const onOfferLeave = jest.fn(() => {});

  const MockComponentWrapped = withCitiesOffer(MockComponent);

  const wrapper = mount(<MockComponentWrapped
    onOfferHover={onOfferHover}
    onOfferLeave={onOfferLeave}
    is_premium={true}
    preview_image={`/filepath`}
  />);

  const element = wrapper.find(`.cities__place-card`);

  it(`Callbacks are called 0 times without mouse/click events`, () => {
    expect(onOfferHover).toHaveBeenCalledTimes(0);
    expect(onOfferHover).toHaveBeenCalledTimes(0);
  });

  it(`MouseOver / MouseLeave callbacks are called 5 times with 5 mouse events`, () => {
    element.simulate(`mouseover`);
    element.simulate(`mouseleave`);
    element.simulate(`mouseover`);
    element.simulate(`mouseleave`);
    element.simulate(`mouseover`);

    expect(onOfferHover).toHaveBeenCalledTimes(3);
    expect(onOfferLeave).toHaveBeenCalledTimes(2);
  });
});
