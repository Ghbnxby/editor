import { UPDATE_LONGDESCRIPTION } from '../actions/product';

export default function longDescription(longDescription = '', action) {
  switch (action.type) {
    case UPDATE_LONGDESCRIPTION:
      return action.value;
    default:
      return longDescription;
  }
}