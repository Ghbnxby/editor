import { UPDATE_STATUS } from '../actions/product';

export default function status(status = '', action) {
  switch (action.type) {
    case UPDATE_STATUS:
      return action.value;
    default:
      return status;
  }
}