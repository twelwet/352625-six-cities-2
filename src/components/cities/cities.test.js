import React from "react";
import renderer from "react-test-renderer";
import Cities from "./cities.jsx";

const citiesList = [`Moscow`, `Saint Petersburg`, `Helsinki`];

it(`Cities correctly renders after relaunch`, () => {
  const onCityClick = jest.fn();
  const onSelect = jest.fn();

  const tree = renderer
    .create(<Cities
      citiesList={citiesList}
      onCityClick={onCityClick}
      active={null}
      onSelect={onSelect}
    />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
