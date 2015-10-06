import { UPDATE_SHORTDESCRIPTION } from '../actions/product';

export default function shortDescription(shortDescription = '', action) {
  switch (action.type) {
    case UPDATE_SHORTDESCRIPTION:
      return action.value || "";
    default:
      return shortDescription;
  }
}