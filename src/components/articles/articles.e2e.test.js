import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Articles from "./articles.jsx";
import {accommodations} from "../../mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Article's description is clickable`, () => {
  const clickHandler = jest.fn();

  const articles = shallow(<Articles
    accommodations={accommodations}
    onClick={clickHandler}
  />);

  const linkElement = articles.find(`.place-card__name a`).first();
  linkElement.debug();
  linkElement.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
