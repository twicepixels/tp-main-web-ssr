import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';
import carousel from './carousel';
import runtime from './runtime';
import collaborator from './collaborator';

export default combineReducers({
  user,
  carousel,
  runtime,
  collaborator,
  auth
});
