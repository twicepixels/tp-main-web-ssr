import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_START,
} from '../constants';

import fetch from '../core/fetch';

function loading() {
  return {
    type: LOGIN_START,
    payload: {
      loading: true,
    },
  };
}

function failed(error) {
  return {
    type: LOGIN_ERROR,
    payload: {
      loading: false,
      error,
    },
  };
}

function result(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      loading: false,
      data,
    },
  };
}

export function login(credentials) {
  console.log(credentials)
  return (dispatch) => {
    dispatch(loading());
    return fetch('http://localhost:3001/auth/login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
    })
  .then(response => response.json())
  .then((data) => {
    if (data.error) {
      return dispatch(failed(data.error));
    } else {
      return dispatch(result(data));
    }
  });
  };
}



