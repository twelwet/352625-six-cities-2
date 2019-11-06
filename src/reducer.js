import {offers} from "./mocks/offers.js";

const getCitiesList = (allOffersList) => {
  return [...new Set(allOffersList.map((item) => item.city.location.name))].sort();
};

const getOffersByCity = (allOffersList, cityName) => {
  return allOffersList.filter((item) => item.city.location.name === cityName);
};

const getInitialState = (allOffersList = offers) => {
  const citiesList = getCitiesList(allOffersList);
  return {
    citiesList,
    city: citiesList[0],
    cityOffers: getOffersByCity(allOffersList, citiesList[0]),
    offers: allOffersList
  };
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
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
  }
};

const reducer = (state = getInitialState(offers), action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        cityOffers: getOffersByCity(state.offers, action.payload)
      });
  }

  return Object.assign({}, state);
};

export {getCitiesList, getInitialState, getOffersByCity, ActionCreator, reducer};
