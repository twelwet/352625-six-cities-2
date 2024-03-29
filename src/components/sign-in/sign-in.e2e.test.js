import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SignIn from "./sign-in.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`Sign-in component works correctly`, () => {
  const onFormSubmit = jest.fn(() => {});

  const signInComponent = shallow(<SignIn
    onFormSubmit={onFormSubmit}
  />);

  const form = signInComponent.find(`.login__form`);

  it(`Callback is called 0 times without submit event`, () => {
    expect(onFormSubmit).toHaveBeenCalledTimes(0);
  });

  it(`Callback is called 1 times on submit event`, () => {
    form.simulate(`submit`, {
      preventDefault: () => {}
    });
    expect(onFormSubmit).toHaveBeenCalledTimes(1);
  });

});
