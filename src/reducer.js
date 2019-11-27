const getCitiesList = (allOffersList) => {
  return [...new Set(allOffersList.map((item) => item.city.name))].sort();
};

const getOffersByCity = (allOffersList, cityName) => {
  return allOffersList.filter((item) => item.city.name === cityName);
};

const getInitialState = () => {
  return {
    citiesList: [],
    city: null,
    cityOffers: [],
    offers: [],
    isAuthRequired: false,
    isError: false,
    errorType: null,
  };
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_OFFERS_FAIL: `LOAD_OFFERS_FAIL`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`
};

const ActionCreator = {
  changeCity: (cityName) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: cityName
    };
  },
  getOffers: (cityName) => {
    return {
      type: ActionType.GET_OFFERS,
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
  },
  requireAuthorization: (status = false) => {
    return {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: status
    };
  }
};

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));

        const city = getCitiesList(response.data)[0];

        dispatch(ActionCreator.changeCity(city));
        dispatch(ActionCreator.getOffers(city));
      })
      .catch((error) => dispatch(ActionCreator.loadOffersFail(error)));
  },
};

const reducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        cityOffers: getOffersByCity(state.offers, action.payload)
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
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthRequired: action.payload
      });
  }

  return Object.assign({}, state);
};

export {getCitiesList, getInitialState, getOffersByCity, ActionType, ActionCreator, Operation, reducer};
