const initialState = {
  isAuthRequired: true,
  id: null,
  email: null,
  name: null,
  [`avatar_url`]: null,
  [`is_pro`]: false,
  isError: false,
  errorType: null
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  SIGN_IN: `SIGN_IN`,
  SIGN_IN_FAIL: `SIGN_IN_FAIL`
};

const ActionCreator = {
  requireAuthorization: (status = initialState.isAuthRequired) => {
    return {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: status
    };
  },
  signIn: (userData) => {
    return {
      type: ActionType.SIGN_IN,
      error: false,
      payload: userData
    };
  },
  signInFail: (error) => {
    return {
      type: ActionType.SIGN_IN_FAIL,
      error: true,
      payload: error
    };
  }
};

const Operation = {
  signIn: () => (dispatch, _, api) => {
    return api.post(`/login`, {
      email: `user@gmail.com`,
      password: `password`
    })
      .then((response) => {
        dispatch(ActionCreator.signIn(response.data));
        dispatch(ActionCreator.requireAuthorization(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.signInFail(err));
        dispatch(ActionCreator.requireAuthorization(true));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthRequired: action.payload
      });
    case ActionType.SIGN_IN:
      return Object.assign({}, state, {
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        [`avatar_url`]: action.payload[`avatar_url`],
        [`is_pro`]: action.payload[`is_pro`],
        isError: action.error,
        errorType: null
      });
    case ActionType.SIGN_IN_FAIL:
      return Object.assign({}, state, {
        isError: action.error,
        errorType: action.payload.message
      });
  }

  return Object.assign({}, state);
};

export {ActionType, ActionCreator, reducer};
