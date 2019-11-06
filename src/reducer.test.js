import {getCitiesList, getInitialState, getOffersByCity, ActionCreator, reducer} from "./reducer.js";

const mockOffers = [
  {
    id: 1,
    city: {
      location: {
        name: `Dusseldorf`,
      }
    },
  },
  {
    id: 2,
    city: {
      location: {
        name: `Amsterdam`,
      }
    },
  },
  {
    id: 3,
    city: {
      location: {
        name: `Budapest`,
      }
    },
  },
  {
    id: 4,
    city: {
      location: {
        name: `Amsterdam`,
      }
    },
  },
  {
    id: 5,
    city: {
      location: {
        name: `Saint Petersburg`,
      }
    },
  },
  {
    id: 6,
    city: {
      location: {
        name: `Dusseldorf`,
      }
    },
  },

];
const citiesList = getCitiesList(mockOffers);
const mockInitialState = {
  citiesList,
  city: `Dusseldorf`,
  cityOffers: [
    {
      id: 1,
      city: {
        location: {
          name: `Dusseldorf`,
        }
      },
    },
    {
      id: 6,
      city: {
        location: {
          name: `Dusseldorf`,
        }
      },
    },
  ],
  offers: mockOffers
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
            location: {
              name: `Amsterdam`,
            }
          },
        },
        {
          id: 4,
          city: {
            location: {
              name: `Amsterdam`,
            }
          },
        },
      ]);
  });

  it(`Function getInitialState works correctly`, () => {
    expect(getInitialState(mockOffers))
      .toEqual({
        citiesList,
        city: `Amsterdam`,
        cityOffers: getOffersByCity(mockOffers, `Amsterdam`),
        offers: mockOffers
      });
  });

  it(`ActionCreator.changeCity works correctly`, () => {
    expect(ActionCreator.changeCity(`Murmansk`)).toEqual({
      type: `CHANGE_CITY`,
      payload: `Murmansk`
    });
  });

  it(`ActionCreator.getOffers works correctly`, () => {
    expect(ActionCreator.getOffers(`Amsterdam`)).toEqual({
      type: `GET_OFFERS`,
      payload: `Amsterdam`
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
      offers: []
    }, ActionCreator.changeCity(`Saint Petersburg`))).toEqual({
      citiesList: [],
      city: `Saint Petersburg`,
      cityOffers: [],
      offers: []
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
            location: {
              name: `Dusseldorf`,
            }
          },
        },
        {
          id: 6,
          city: {
            location: {
              name: `Dusseldorf`,
            }
          },
        },
      ],
      offers: mockOffers}, ActionCreator.getOffers(`Amsterdam`))).toEqual({
      citiesList: [],
      city: `Not Tested`,
      cityOffers: [
        {
          id: 2,
          city: {
            location: {
              name: `Amsterdam`,
            }
          },
        },
        {
          id: 4,
          city: {
            location: {
              name: `Amsterdam`,
            }
          },
        },
      ],
      offers: mockOffers
    });
  });
});
