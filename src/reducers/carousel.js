import {
  LOAD_CAROUSEL_START,
  LOAD_CAROUSEL_SUCCESS,
  LOAD_CAROUSEL_ERROR,
} from '../constants';

export default function carousel(state = null, action) {
  if (state === null) {
    return {
      data: null,
    };
  }

  switch (action.type) {
    case LOAD_CAROUSEL_START: {
      const data = state[action.payload] ? action.payload.data : state.carousel;
      return {
        ...state,
        data,
        loading: action.payload.loading,
      };
    }

    case LOAD_CAROUSEL_SUCCESS: {
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,

      };
    }

    case LOAD_CAROUSEL_ERROR: {
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
}
