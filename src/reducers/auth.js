import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_START,
} from '../constants';

export default function auth(state = null, action) {
  if (state === null) {
    return {
      data: null,
    };
  }

  switch (action.type) {
    case LOGIN_START: {
      const data = state[action.payload] ? action.payload.data : state.auth;
      return {
        ...state,
        data,
        loading: action.payload.loading,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,

      };
    }

    case LOGIN_ERROR: {
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
