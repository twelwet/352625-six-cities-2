import {createSelector} from "reselect";
import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.DATA;

const getAllOffers = (state) => {
  return state[NAME_SPACE].offers;
};

const getCity = (state) => {
  return state[NAME_SPACE].city;
};

const getCitiesList = createSelector(
    getAllOffers,
    (offers) => [...new Set(offers.map((item) => item.city.name))].sort()
);

const getOffersByCity = createSelector(
    getAllOffers,
    getCity,
    (allOffers, cityName) => allOffers
      .filter((item) => item.city.name === cityName)
);

const getOfferById = createSelector(
    [getAllOffers, (_state, offerId) => offerId],
    (state, offerId) => state
      .find((it) => it.id === offerId));

export {getAllOffers, getCity, getCitiesList, getOffersByCity, getOfferById};
