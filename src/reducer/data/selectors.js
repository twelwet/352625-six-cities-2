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

const getDistance = (current, target) => {
  const x = Math.abs(current.location.latitude - target.location.latitude);
  const y = Math.abs(current.location.longitude - target.location.longitude);
  return Math.pow(x, 2) + Math.pow(y, 2);
};

const getNearestOffers = (state, targetId, quantity = 3) => {
  const targetOffer = getOfferById(state, targetId);
  const cityOffers = getOffersByCity(state);

  const nearestOffers = cityOffers.sort((a, b) => {
    return getDistance(a, targetOffer) - getDistance(b, targetOffer);
  });

  return nearestOffers.slice(1, quantity + 1);
};

const getComments = (state) => {
  return state[NAME_SPACE].comments;
}

export {getAllOffers, getCity, getCitiesList, getOffersByCity, getOfferById, getNearestOffers, getComments};
