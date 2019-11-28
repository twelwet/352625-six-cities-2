import {getCitiesList, getOffersByCity} from "./selectors.js";
import NameSpace from "../name-spaces.js";

const NAME_SPACE = NameSpace.DATA;

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

const mockState = {
  [NAME_SPACE]: {
    city: null,
    offers: mockOffers
  }
};

describe(`Selectors works correctly`, () => {
  it(`Function getCitiesList works correctly`, () => {
    expect(getCitiesList(mockState))
      .toEqual([`Amsterdam`, `Budapest`, `Dusseldorf`, `Saint Petersburg`]);
  });

  it(`Function getOffersByCity works correctly`, () => {
    const mockStateWithCity = {
      [NAME_SPACE]: {
        city: `Amsterdam`,
        offers: mockOffers
      }
    };

    expect(getOffersByCity(mockStateWithCity))
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
});
