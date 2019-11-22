const getCitiesList = (allOffersList) => {
  return [...new Set(allOffersList.map((item) => item.city.name))].sort();
};

const getOffersByCity = (allOffersList, cityName) => {
  return allOffersList.filter((item) => item.city.name === cityName);
};

const getInitialState = (allOffersList = []) => {
  const citiesList = getCitiesList(allOffersList);
  return {
    citiesList,
    city: null,
    cityOffers: getOffersByCity(allOffersList, citiesList[0]),
    offers: allOffersList,
    isAuthRequired: false
  };
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
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
      payload: offers
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
      });
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
        offers: action.payload
      });
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthRequired: action.payload
      });
  }

  return Object.assign({}, state);
};

export {getCitiesList, getInitialState, getOffersByCity, ActionCreator, Operation, reducer};
