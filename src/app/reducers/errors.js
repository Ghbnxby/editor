import {UPDATE_ERRORS} from '../actions/errors';

export default function errors(errors = {}, action) {
  switch (action.type) {
    case UPDATE_ERRORS:
      return Object.assign({}, action.errors);
    default:
      return errors;
  }
}
