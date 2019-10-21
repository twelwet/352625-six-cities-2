import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Articles from "./articles.jsx";
import {accommodations} from "../../mocks";

Enzyme.configure({adapter: new Adapter()});

it(`First article's link "h2.place-card__name.a" is clickable`, () => {
  const clickHandler = jest.fn();

  const articles = shallow(<Articles
    accommodations={accommodations}
    onclick={clickHandler}
  />);

  const linkElement = articles.find(`.place-card__name a`).first();
  linkElement.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
