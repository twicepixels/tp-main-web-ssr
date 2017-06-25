import Promise from 'bluebird';
import fetch, { Request, Headers, Response } from 'node-fetch';
import { host } from '../../config';

fetch.Promise = Promise;
Response.Promise = Promise;

function localUrl(url) {

  if (url.startsWith('//')) {
    return `https:${url}`;
  }

  if (url.startsWith('http')) {
    return url;
  }

  return `http://${host}${url}`;
}


function localFetch(url, options) {
  console.log('hhhhhhhhhhhhhhhhhhhhey');
  console.log(localUrl(url));
  return fetch(localUrl(url), options);
}

export { localFetch as default, Request, Headers, Response };
