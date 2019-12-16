const initialState = {
  city: null,
  offers: [],
  isError: false,
  errorType: null,
  comments: []
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_OFFERS_FAIL: `LOAD_OFFERS_FAIL`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_COMMENTS_FAIL: `LOAD_COMMENTS_FAIL`,
  TOGGLE_FAVORITE: `TOGGLE_FAVORITE`
};

const ActionCreator = {
  changeCity: (cityName) => {
    return {
      type: ActionType.CHANGE_CITY,
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
  loadComments: (comments) => {
    return {
      type: ActionType.LOAD_OFFERS,
      error: false,
      payload: comments
    };
  },
  loadCommentsFail: (error) => {
    return {
      type: ActionType.LOAD_COMMENTS_FAIL,
      error: true,
      payload: error
    };
  },
  toggleFavorite: ({offerId, favoriteStatus}) => {
    return {
      type: ActionType.TOGGLE_FAVORITE,
      payload: {offerId, favoriteStatus}
    };
  }
};

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));

        const city = (response.data)[0].city.name;

        dispatch(ActionCreator.changeCity(city));
      })
      .catch((error) => {
        dispatch(ActionCreator.loadOffersFail(error));
      });
  },
  loadCommentsById: (id) => (dispatch, _, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
      })
      .catch((error) => {
        dispatch(ActionCreator.loadCommentsFail(error));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
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
    case ActionType.LOAD_COMMENTS:
      return Object.assign({}, state, {
        comments: action.payload,
        isError: action.error,
        errorType: null
      });
    case ActionType.LOAD_COMMENTS_FAIL:
      return Object.assign({}, state, {
        isError: action.error,
        errorType: action.payload.message
      });
    case ActionType.TOGGLE_FAVORITE:
      const targetOffer = state.offers.find((it) => it.id === action.payload.offerId);

      if (targetOffer) {
        const copyState = Object.assign({}, state);
        const copyTargetOffer = copyState.offers.find((it) => it.id === action.payload.offerId);
        copyTargetOffer[`is_favorite`] = !action.payload.favoriteStatus;
        return copyState;
      }
  }

  return state;
};

export {ActionType, ActionCreator, Operation, reducer};
