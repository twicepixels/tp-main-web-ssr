import {
  LOAD_CAROUSEL_START,
  LOAD_CAROUSEL_SUCCESS,
  LOAD_CAROUSEL_ERROR,
} from '../constants';

import fetch from '../core/fetch';

function loading() {
  return {
    type: LOAD_CAROUSEL_START,
    payload: {
      loading: true,
    },
  };
}

function failed(error) {
  return {
    type: LOAD_CAROUSEL_ERROR,
    payload: {
      loading: false,
      error,
    },
  };
}

function result(data) {
  return {
    type: LOAD_CAROUSEL_SUCCESS,
    payload: {
      loading: false,
      data,
    },
  };
}

export function fetchCarousel() {
  return (dispatch) => {
    dispatch(loading());
    fetch('http://localhost:3001/users/getall', { method: 'POST' })
  .then(response => response.json())
  .then((data) => {
    if (data.error) {
      dispatch(failed(data.error));
    } else {
      dispatch(result(data));
    }
  });
  };
}


