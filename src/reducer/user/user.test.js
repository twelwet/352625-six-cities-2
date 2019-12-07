import MockAdapter from "axios-mock-adapter";
import configureAPI from "../../api.js";
import {ActionType, ActionCreator, Operation, reducer} from "./user.js";

describe(`ActionCreator works correctly`, () => {
  it(`ActionCreator.requireAuthorization works correctly`, () => {
    expect(ActionCreator.requireAuthorization(true)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: true
    });
  });

  it(`ActionCreator.signIn works correctly`, () => {
    const mockUserData = {
      email: `user@mail.org`,
      password: `12345678`
    };

    expect(ActionCreator.signIn(mockUserData)).toEqual({
      type: ActionType.SIGN_IN,
      error: false,
      payload: mockUserData
    });
  });

  it(`ActionCreator.signInFail works correctly`, () => {
    const mockError = `Error message`;

    expect(ActionCreator.signInFail(mockError)).toEqual({
      type: ActionType.SIGN_IN_FAIL,
      error: true,
      payload: mockError
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

  it(`Reducer changes initialState correctly with action type "SIGN_IN`, () => {
    const mockServerData = {
      id: 1,
      email: `user@mail.org`,
      name: `user`,
      [`avatar_url`]: `img/1.png`,
      [`is_pro`]: false,
    };

    const mockInitialState = {
      isAuthRequired: false,
      id: null,
      email: null,
      name: null,
      [`avatar_url`]: null,
      [`is_pro`]: false,
      isError: false,
      errorType: null
    };

    expect(reducer(mockInitialState, ActionCreator.signIn(mockServerData))).toEqual({
      isAuthRequired: false,
      id: mockServerData.id,
      email: mockServerData.email,
      name: mockServerData.name,
      [`avatar_url`]: mockServerData.avatar_url,
      [`is_pro`]: mockServerData.is_pro,
      isError: false,
      errorType: null
    });
  });

  it(`Reducer changes initialState correctly with action type "SIGN_IN_FAIL`, () => {
    const mockServerError = new Error(`Request failed with status code 400`);

    const mockInitialState = {
      isAuthRequired: `NOT TESTED`,
      id: `NOT TESTED`,
      email: `NOT TESTED`,
      name: `NOT TESTED`,
      [`avatar_url`]: `NOT TESTED`,
      [`is_pro`]: `NOT TESTED`,
      isError: false,
      errorType: null
    };

    expect(reducer(mockInitialState, ActionCreator.signInFail(mockServerError))).toEqual({
      isAuthRequired: `NOT TESTED`,
      id: `NOT TESTED`,
      email: `NOT TESTED`,
      name: `NOT TESTED`,
      [`avatar_url`]: `NOT TESTED`,
      [`is_pro`]: `NOT TESTED`,
      isError: true,
      errorType: mockServerError.message
    });
  });
});

describe(`API calls work as declared`, () => {
  it(`Should make a correct API call to "/login"`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const signInOperation = Operation.signIn();

    const mockServerData = {
      id: 1,
      email: `user@mail.org`,
      name: `user`,
      [`avatar_url`]: `img/1.png`,
      [`is_pro`]: false,
    };

    apiMock
      .onPost(`/login`)
      .reply(200, mockServerData);

    return signInOperation(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SIGN_IN,
          error: false,
          payload: mockServerData
        });
      });
  });

  it(`Should work as declared with server reply "Error status code 400"`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const signInOperation = Operation.signIn();
    const mockError = new Error(`Request failed with status code 400`);

    apiMock
      .onPost(`/login`)
      .reply(400, mockError);

    return signInOperation(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SIGN_IN_FAIL,
          error: true,
          payload: mockError
        });
      });
  });

  it(`Should work as declared with server reply "Error status code 401 Unauthorized"`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const signInOperation = Operation.signIn();
    const mockError = new Error(`Request failed with status code 401`);

    apiMock
      .onPost(`/login`)
      .reply(401, mockError);

    return signInOperation(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SIGN_IN_FAIL,
          error: true,
          payload: mockError
        });

      });
  });

  it(`Should work as declared with server reply "Error status code 403"`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const signInOperation = Operation.signIn();
    const mockError = new Error(`Request failed with status code 403`);

    apiMock
      .onPost(`/login`)
      .reply(403, mockError);

    return signInOperation(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SIGN_IN_FAIL,
          error: true,
          payload: mockError
        });

      });
  });
});
