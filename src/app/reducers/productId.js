import { UPDATE_PRODUCTID } from '../actions/product';

export default function productId(productId = '', action) {
  switch (action.type) {
  case UPDATE_PRODUCTID:
    return action.value;
  default:
    return productId;
  }
}