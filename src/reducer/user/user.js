const getInitialState = () => {
  return {
    isAuthRequired: false
  };
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`
};

const ActionCreator = {
  requireAuthorization: (status = false) => {
    return {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: status
    };
  }
};

const reducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthRequired: action.payload
      });
  }

  return Object.assign({}, state);
};

export {ActionType, ActionCreator, reducer};
