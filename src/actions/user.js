import {
  USER_CREATE_START,
  USER_CREATE_ERROR,
  USER_CREATE_SUCCESS,
} from '../constants';

import fetch from '../core/fetch';

function loading() {
  return {
    type: USER_CREATE_START,
    payload: {
      loading: true,
    },
  };
}

function failed(error) {
  return {
    type: USER_CREATE_ERROR,
    payload: {
      loading: false,
      error,
    },
  };
}

function result(data) {
  return {
    type: USER_CREATE_SUCCESS,
    payload: {
      loading: false,
      data,
    },
  };
}

export function register(data) {
    console.log(data)
  return (dispatch) => {
    dispatch(loading());
    return fetch('http://localhost:3001/users', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        email: data.email,
        accountId: data.accountId,
        firstName: data.firstName,
        lastName: data.lastName,
        location: data.location,
        countryId: data.countryId,
        createdAt: data.createdAt,
        verifiedAt: data.verifiedAt
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



