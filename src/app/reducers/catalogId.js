import { UPDATE_CATALOGID } from '../actions/product';

export default function catalogId(catalogId = '', action) {
  switch (action.type) {
    case UPDATE_CATALOGID:
      return action.value;
    default:
      return catalogId;
  }
}