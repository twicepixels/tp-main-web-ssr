import {
  COLLABORATOR_CREATE_ERROR,
  COLLABORATOR_CREATE_START,
  COLLABORATOR_CREATE_SUCCESS,
} from '../constants';

import fetch from '../core/fetch';

function loading() {
  return {
    type: COLLABORATOR_CREATE_START,
    payload: {
      loading: true,
    },
  };
}

function failed(error) {
  return {
    type: COLLABORATOR_CREATE_ERROR,
    payload: {
      loading: false,
      error,
    },
  };
}

function result(data) {
  return {
    type: COLLABORATOR_CREATE_SUCCESS,
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
    return fetch('http://localhost:3001/collaborator', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identityCard: data.identityCard,
        address1: data.address1,
        address2: data.address2,
        phoneNumber: data.phoneNumber,
        postalCode: data.postalCode,
        rating: data.rating,
        city: data.city,
        authorized: data.authorized,
        accountId: data.accountId,
        countryId: data.countryId,
        description: data.description
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