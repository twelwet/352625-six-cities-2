import React from "react";
import renderer from "react-test-renderer";
import withCitiesOffer from "./with-cities-offer.js";

const MockComponent = () => {
  return <div>Mock</div>;
};

const MockComponentWrapped = withCitiesOffer(MockComponent);

it(`withCitiesOffer correctly wrap MockComponent`, () => {

  const props = {
    onOfferHover: jest.fn(),
    onOfferLeave: jest.fn(),
    [`is_premium`]: true,
    [`preview_image`]: `/filepath`
  };

  const tree = renderer
    .create(<MockComponentWrapped {...props} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
