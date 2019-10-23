import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offer from "./offer.jsx";

const offer = {
  id: 1,
  description: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  price: 120,
  image: `img/apartment-01.jpg`,
  rating: 100,
  isPremium: true,
  isBookmark: false
};

Enzyme.configure({adapter: new Adapter()});

it(`First offer card description is clickable`, () => {
  const clickHandler = jest.fn();

  const article = shallow(<Offer
    id={offer.id}
    key={offer.id}
    description={offer.description}
    type={offer.type}
    price={offer.price}
    image={offer.image}
    rating={offer.rating}
    isPremium={offer.isPremium}
    isBookmark={offer.isBookmark}
    descriptionClickHandler={clickHandler}
  />
  );

  const linkElement = article.find(`.place-card__name a`);
  linkElement.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
