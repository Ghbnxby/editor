import { UPDATE_MANUFACTURE } from '../actions/product';

export default function manufacture(manufacture = '', action) {
  switch (action.type) {
    case UPDATE_MANUFACTURE:
      return action.value || "";
    default:
      return manufacture;
  }
}