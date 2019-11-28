import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";
import App from "./app.jsx";

const mockOffers = [
  {
    [`id`]: 111,
    [`city`]: {
      [`name`]: `City Name`,
      [`location`]: {
        [`latitude`]: 52.38333,
        [`longitude`]: 4.9,
        [`zoom`]: 12
      }
    },
    [`location`]: {
      [`latitude`]: 52.3909553943508,
      [`longitude`]: 4.85309666406198,
      [`zoom`]: 12
    },
    [`title`]: `Some text`,
    [`type`]: `Apartment`,
    [`price`]: 120,
    [`preview_image`]: `img/img-1.jpg`,
    [`rating`]: 100,
    [`is_premium`]: true,
    [`is_favorite`]: false
  },
  {
    [`id`]: 222,
    [`city`]: {
      [`name`]: `City Name 2`,
      [`location`]: {
        [`latitude`]: 52.38333,
        [`longitude`]: 4.9,
        [`zoom`]: 12
      }
    },
    [`location`]: {
      [`latitude`]: 52.3909553943508,
      [`longitude`]: 4.85309666406198,
      [`zoom`]: 12
    },
    [`title`]: `Some text`,
    [`type`]: `House`,
    [`price`]: 120,
    [`preview_image`]: `img/img-2.jpg`,
    [`rating`]: 100,
    [`is_premium`]: false,
    [`is_favorite`]: true
  }
];

Enzyme.configure({adapter: new Adapter()});

it(`App correctly renders after relaunch`, () => {
  const tree = shallow(<App {...mockOffers} />);

  expect(toJson(tree)).toMatchSnapshot();
});
