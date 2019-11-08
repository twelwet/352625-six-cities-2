import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Cities from "./cities.jsx";

Enzyme.configure({adapter: new Adapter()});

const citiesList = [`Moscow`, `Saint Petersburg`, `Helsinki`];

describe(`Cities component works correctly`, () => {
  const onCityClick = jest.fn(() => {});

  const citiesComponent = mount(<Cities
    citiesList={citiesList}
    city={`Moscow`}
    onCityClick={onCityClick}
  />);

  it(`All of three cities are rendered`, () => {
    expect(citiesComponent.find(`.tabs__item`)).toHaveLength(3);
  });

  it(`Moscow city is active by default`, () => {
    expect(citiesComponent.find(`.tabs__item--active`).text()).toEqual(`Moscow`);
  });

  it(`Callback is called 0 times without click event`, () => {
    expect(onCityClick).toHaveBeenCalledTimes(0);
  });

  it(`Callback is called 1 times with click on Helsinki city`, () => {
    const helsinkiCity = citiesComponent.find(`.tabs__item`).last();
    expect(helsinkiCity.text()).toEqual(`Helsinki`);

    helsinkiCity.simulate(`click`);
    expect(onCityClick).toHaveBeenCalledTimes(1);
  });
});
