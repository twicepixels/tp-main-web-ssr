import {
  COLLABORATOR_CREATE_ERROR,
  COLLABORATOR_CREATE_START,
  COLLABORATOR_CREATE_SUCCESS,
} from '../constants';

export default function collaborator(state = null, action) {
  if (state === null) {
    return {
      data: null,
    };
  }

  switch (action.type) {
    case COLLABORATOR_CREATE_START: {
      const data = state[action.payload] ? action.payload.data : state.collaborator;
      return {
        ...state,
        data,
        loading: action.payload.loading,
      };
    }

    case COLLABORATOR_CREATE_SUCCESS: {
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,

      };
    }

    case COLLABORATOR_CREATE_ERROR: {
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
