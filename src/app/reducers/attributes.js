import {
  UPDATE_ATTRIBUTES,
} from '../actions/attributes';

export default function attributes(attributes = [], action) {
  switch (action.type) {
    case UPDATE_ATTRIBUTES:
      return action.array || [];
    default:
      return attributes || [];
  }
}