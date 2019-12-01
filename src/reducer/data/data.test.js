import MockAdapter from "axios-mock-adapter";
import configureAPI from "../../api.js";
import {ActionType, Operation, ActionCreator, reducer} from "./data";

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

describe(`ActionCreator works correctly`, () => {
  it(`ActionCreator.changeCity works correctly`, () => {
    expect(ActionCreator.changeCity(`Murmansk`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Murmansk`
    });
  });

  it(`ActionCreator.loadOffers works correctly`, () => {
    expect(ActionCreator.loadOffers(mockOffers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: mockOffers,
      error: false
    });
  });

  it(`ActionCreator.loadOffersFail works correctly`, () => {
    const mockError404 = new Error(`Request failed with status code 404`);

    expect(ActionCreator.loadOffersFail(mockError404)).toEqual({
      type: ActionType.LOAD_OFFERS_FAIL,
      payload: mockError404,
      error: true
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer changes cityName in the state with action type "CHANGE_CITY"`, () => {
    const initialState = {
      city: null,
      offers: [`NOT`, `TESTED`]
    };
    const changedState = {
      city: `Murmansk`,
      offers: [`NOT`, `TESTED`]
    };

    expect(
        reducer(initialState, ActionCreator.changeCity(`Murmansk`))
    ).toEqual(changedState);
  });

  it(`Reducer changes offers in the state with action type "LOAD_OFFERS"`, () => {
    expect(reducer({
      city: `Not Tested`,
      offers: [],
      isError: false,
      errorType: null
    }, ActionCreator.loadOffers(
        mockOffers
    )))
      .toEqual({
        city: `Not Tested`,
        offers: mockOffers,
        isError: false,
        errorType: null
      });

  });

  it(`Reducer changes "isError" and "errorType" with action type "LOAD_OFFERS_FAIL"`, () => {
    const mockError404 = new Error(`Request failed with status code 404`);

    expect(reducer({
      city: `Not Tested`,
      offers: [`Not`, `Tested`],
      isError: false,
      errorType: null
    }, ActionCreator.loadOffersFail(
        mockError404
    )))
      .toEqual({
        city: `Not Tested`,
        offers: [`Not`, `Tested`],
        isError: true,
        errorType: mockError404.message
      });
  });
});

describe(`API calls work as declared`, () => {
  it(`Should make a correct API call to "/hotels"`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, mockOffers);

    return offersLoader(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: mockOffers,
          error: false
        });
      });
  });

  it(`Should make an incorrect API call to "/hotelssss"`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offersLoader = Operation.loadOffers();
    const mockError404 = new Error(`Request failed with status code 404`);

    apiMock
      .onGet(`/hotelssss`)
      .reply(404, mockError404);

    return offersLoader(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_FAIL,
          payload: mockError404,
          error: true
        });
      });
  });
});

