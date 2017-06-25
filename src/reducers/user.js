import {
  USER_CREATE_START,
  USER_CREATE_ERROR,
  USER_CREATE_SUCCESS,
} from '../constants';

export default function user(state = null, action) {
  if (state === null) {
    return {
      data: null,
    };
  }

  switch (action.type) {
    case USER_CREATE_START: {
      const data = state[action.payload] ? action.payload.data : state.user;
      return {
        ...state,
        data,
        loading: action.payload.loading,
      };
    }

    case USER_CREATE_SUCCESS: {
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,

      };
    }

    case USER_CREATE_ERROR: {
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
