import { UPDATE_QUANTITY } from '../actions/product';

export default function quantity(quantity = '', action) {
  switch (action.type) {
    case UPDATE_QUANTITY:
      return action.value;
    default:
      return quantity;
  }
}