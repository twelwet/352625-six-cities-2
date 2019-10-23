import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Articles from "./articles.jsx";
import {offers} from "../../mocks/offers";

Enzyme.configure({adapter: new Adapter()});

it(`Article's description is clickable`, () => {
  const clickHandler = jest.fn();

  const articles = shallow(<Articles
    offers={offers}
    onDescriptionClick={clickHandler}
  />);

  const linkElement = articles.find(`.place-card__name a`).first();
  linkElement.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
