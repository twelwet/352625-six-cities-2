const initialState = {
  city: null,
  offers: [],
  isError: false,
  errorType: null
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_OFFERS_FAIL: `LOAD_OFFERS_FAIL`
};

const ActionCreator = {
  changeCity: (cityName) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: cityName
    };
  },
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      error: false,
      payload: offers
    };
  },
  loadOffersFail: (error) => {
    return {
      type: ActionType.LOAD_OFFERS_FAIL,
      error: true,
      payload: error
    };
  }
};

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));

        const city = (response.data)[0].city.name;

        dispatch(ActionCreator.changeCity(city));
      })
      .catch((error) => {
        dispatch(ActionCreator.loadOffersFail(error));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
        isError: action.error,
        errorType: null
      });
    case ActionType.LOAD_OFFERS_FAIL:
      return Object.assign({}, state, {
        isError: action.error,
        errorType: action.payload.message
      });
  }

  return Object.assign({}, state);
};

export {ActionType, ActionCreator, Operation, reducer};
