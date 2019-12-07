import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveElement from "./with-active-element.js";
import PropTypes from "prop-types";

const MockComponent = (props) => {
  return (
    <button
      className="click-me"
      onClick={() => props.onSelect(`newState`)}
    >Click Me
    </button>
  );
};

const MockComponentWrapped = withActiveElement(MockComponent);

Enzyme.configure({adapter: new Adapter()});

describe(`HOC withActiveElement works correctly`, () => {
  const onSelect = jest.fn();

  const wrapper = mount(<MockComponentWrapped
    onSelect={onSelect}
  />);

  const buttonElement = wrapper.find(`.click-me`);

  it(`MockComponent renders correctly and consists 1 button inside`, () => {
    expect(buttonElement).toHaveLength(1);
  });

  it(`MockComponentWrapped have initial state`, () => {
    expect(wrapper.state().active).toEqual(null);
  });

  it(`MockComponentWrapped change state on click`, () => {
    buttonElement.simulate(`click`);
    expect(wrapper.state().active).toEqual(`newState`);
  });
});

MockComponent.propTypes = {
  onSelect: PropTypes.func.isRequired
};
