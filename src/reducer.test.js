import {getCitiesList, getInitialState, getOffersByCity, ActionType, ActionCreator, Operation, reducer} from "./reducer.js";
import configureAPI from "./api.js";
import MockAdapter from "axios-mock-adapter";

const mockOffers = [
  {
    id: 1,
    city: {
      name: `Dusseldorf`,
      location: {}
    },
  },
  {
    id: 2,
    city: {
      name: `Amsterdam`,
      location: {}
    },
  },
  {
    id: 3,
    city: {
      name: `Budapest`,
      location: {}
    },
  },
  {
    id: 4,
    city: {
      name: `Amsterdam`,
      location: {}
    },
  },
  {
    id: 5,
    city: {
      name: `Saint Petersburg`,
      location: {}
    },
  },
  {
    id: 6,
    city: {
      name: `Dusseldorf`,
      location: {}
    },
  },

];
const citiesList = getCitiesList(mockOffers);
const mockInitialState = {
  citiesList: [],
  city: null,
  cityOffers: [],
  offers: [],
  isAuthRequired: false
};

const downloadedState = {
  citiesList,
  city: citiesList[0],
  cityOffers: getOffersByCity(mockOffers, citiesList[0]),
  offers: mockOffers,
  isAuthRequired: false
};

describe(`Reducer's utility functions works correctly`, () => {
  it(`Function getCitiesList works correctly`, () => {
    expect(getCitiesList(mockOffers))
      .toEqual([`Amsterdam`, `Budapest`, `Dusseldorf`, `Saint Petersburg`]);
  });

  it(`Function getOffersByCity works correctly`, () => {
    expect(getOffersByCity(mockOffers, `Amsterdam`))
      .toEqual([
        {
          id: 2,
          city: {
            name: `Amsterdam`,
            location: {}
          },
        },
        {
          id: 4,
          city: {
            name: `Amsterdam`,
            location: {}
          },
        },
      ]);
  });

  it(`Function getInitialState works correctly`, () => {
    expect(getInitialState([]))
      .toEqual({
        citiesList: [],
        city: null,
        cityOffers: getOffersByCity([], null),
        offers: [],
        isAuthRequired: false
      });
  });

  it(`ActionCreator.changeCity works correctly`, () => {
    expect(ActionCreator.changeCity(`Murmansk`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Murmansk`
    });
  });

  it(`ActionCreator.getOffers works correctly`, () => {
    expect(ActionCreator.getOffers(`Amsterdam`)).toEqual({
      type: ActionType.GET_OFFERS,
      payload: `Amsterdam`
    });
  });

  it(`ActionCreator.loadOffers works correctly`, () => {
    expect(ActionCreator.loadOffers(mockOffers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: mockOffers
    });
  });

  it(`ActionCreator.requireAuthorization works correctly`, () => {
    expect(ActionCreator.requireAuthorization(true)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: true
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without any action should return initial state`, () => {
    expect(reducer(mockInitialState, {})).toEqual(mockInitialState);
  });

  it(`Reducer changes cityName in the state with action type "CHANGE_CITY"`, () => {
    expect(reducer({
      citiesList: [],
      city: `Dusseldorf`,
      cityOffers: [],
      offers: [],
      isAuthRequired: false
    }, ActionCreator.changeCity(`Saint Petersburg`))).toEqual({
      citiesList: [],
      city: `Saint Petersburg`,
      cityOffers: [],
      offers: [],
      isAuthRequired: false
    });
  });

  it(`Reducer changes offerList in the state with action type "GET_OFFERS"`, () => {
    expect(reducer({
      citiesList: [],
      city: `Not Tested`,
      cityOffers: [
        {
          id: 1,
          city: {
            name: `Dusseldorf`,
            location: {}
          },
        },
        {
          id: 6,
          city: {
            name: `Dusseldorf`,
            location: {}
          },
        },
      ],
      offers: mockOffers,
      isAuthRequired: false
    }, ActionCreator.getOffers(`Amsterdam`))).toEqual({
      citiesList: [],
      city: `Not Tested`,
      cityOffers: [
        {
          id: 2,
          city: {
            name: `Amsterdam`,
            location: {}
          },
        },
        {
          id: 4,
          city: {
            name: `Amsterdam`,
            location: {}
          },
        },
      ],
      offers: mockOffers,
      isAuthRequired: false
    });
  });

  it(`Reducer changes offers in the state with action type "LOAD_OFFERS"`, () => {
    expect(reducer({
      citiesList: [`Not`, `Tested`],
      city: `Not Tested`,
      cityOffers: [`Not`, `Tested`],
      offers: [],
      isAuthRequired: false
    }, ActionCreator.loadOffers(
        mockOffers
    )))
      .toEqual({
        citiesList: [`Not`, `Tested`],
        city: `Not Tested`,
        cityOffers: [`Not`, `Tested`],
        offers: mockOffers,
        isAuthRequired: false
      });

  });

  it(`Reducer changes isAuthRequired in the state with action type "REQUIRE_AUTHORIZATION"`, () => {
    expect(reducer({
      citiesList: [`Not`, `Tested`],
      city: `Not Tested`,
      cityOffers: [`Not`, `Tested`],
      offers: [`Not`, `Tested`],
      isAuthRequired: false
    }, ActionCreator.requireAuthorization(
        true
    )))
      .toEqual({
        citiesList: [`Not`, `Tested`],
        city: `Not Tested`,
        cityOffers: [`Not`, `Tested`],
        offers: [`Not`, `Tested`],
        isAuthRequired: true
      });

  });

  it(`Should make a correct API call to /hotels`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, mockOffers);

    return offersLoader(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_OFFERS`,
          payload: mockOffers
        });
      });
  });
});

