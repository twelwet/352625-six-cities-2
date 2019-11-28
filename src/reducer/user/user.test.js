import {ActionType, ActionCreator, reducer} from "./user.js";

describe(`ActionCreator works correctly`, () => {
  it(`ActionCreator.requireAuthorization works correctly`, () => {
    expect(ActionCreator.requireAuthorization(true)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: true
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer changes isAuthRequired in the state with action type "REQUIRE_AUTHORIZATION"`, () => {
    expect(reducer({
      isAuthRequired: false,
    }, ActionCreator.requireAuthorization(true)
    ))
      .toEqual({
        isAuthRequired: true,
      });
  });
});
