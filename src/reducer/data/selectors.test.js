import {getCitiesList, getOffersByCity, getOfferById, getNearestOffers} from "./selectors.js";
import NameSpace from "../name-spaces.js";

const NAME_SPACE = NameSpace.DATA;

const mockOffers = [
  {
    id: 1,
    city: {
      name: `Dusseldorf`,
      location: {}
    },
    location: {
      latitude: 51.205402,
      longitude: 6.761314
    }

  },
  {
    id: 2,
    city: {
      name: `Amsterdam`,
      location: {}
    },
    location: {
      latitude: 52.38554,
      longitude: 4.902976
    }
  },
  {
    id: 3,
    city: {
      name: `Budapest`,
      location: {}
    },
    location: {
      latitude: 47.49791,
      longitude: 19.04023
    }
  },
  {
    id: 4,
    city: {
      name: `Amsterdam`,
      location: {}
    },
    location: {
      latitude: 52.35754,
      longitude: 4.917975
    }
  },
  {
    id: 5,
    city: {
      name: `Saint Petersburg`,
      location: {}
    },
    location: {
      latitude: 59.93863,
      longitude: 30.31413
    }
  },
  {
    id: 6,
    city: {
      name: `Dusseldorf`,
      location: {}
    },
    location: {
      latitude: 51.243402,
      longitude: 6.791314
    }
  },
  {
    id: 7,
    city: {
      name: `Dusseldorf`,
      location: {}
    },
    location: {
      latitude: 51.204402,
      longitude: 6.777314
    }
  },
  {
    id: 8,
    city: {
      name: `Dusseldorf`,
      location: {}
    },
    location: {
      latitude: 51.216402,
      longitude: 6.758314
    }
  },
  {
    id: 9,
    city: {
      name: `Dusseldorf`,
      location: {}
    },
    location: {
      latitude: 51.248402,
      longitude: 6.763314
    }
  }
];

describe(`Selectors works correctly`, () => {
  it(`Function getCitiesList works correctly`, () => {
    const mockState = {
      [NAME_SPACE]: {
        city: null,
        offers: mockOffers
      }
    };

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
          location: {
            latitude: 52.38554,
            longitude: 4.902976
          }
        },
        {
          id: 4,
          city: {
            name: `Amsterdam`,
            location: {}
          },
          location: {
            latitude: 52.35754,
            longitude: 4.917975
          }
        }
      ]);
  });

  it(`Function getOfferById works correctly`, () => {
    const mockState = {
      [NAME_SPACE]: {
        city: null,
        offers: mockOffers
      }
    };

    const mockId = 7;

    expect(getOfferById(mockState, mockId)).toEqual(
        {
          id: 7,
          city: {
            name: `Dusseldorf`,
            location: {}
          },
          location: {
            latitude: 51.204402,
            longitude: 6.777314
          }
        }
    );
  });

  it(`Function getNearestOffers works correctly`, () => {
    const mockState = {
      [NAME_SPACE]: {
        city: `Dusseldorf`,
        offers: mockOffers
      }
    };

    const nearestOffers = getNearestOffers(mockState, 7, 3);

    expect(nearestOffers).toEqual([
      {
        id: 1,
        city: {
          name: `Dusseldorf`,
          location: {}
        },
        location: {
          latitude: 51.205402,
          longitude: 6.761314
        }
      },
      {
        id: 8,
        city: {
          name: `Dusseldorf`,
          location: {}
        },
        location: {
          latitude: 51.216402,
          longitude: 6.758314
        }
      },
      {
        id: 6,
        city: {
          name: `Dusseldorf`,
          location: {}
        },
        location: {
          latitude: 51.243402,
          longitude: 6.791314
        }
      }
    ]);
  });
});
