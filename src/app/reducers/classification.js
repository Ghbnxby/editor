import { UPDATE_CLASSIFICATION } from '../actions/product';

export default function classification(classification = '', action) {
  switch (action.type) {
    case UPDATE_CLASSIFICATION:
      return action.value;
    default:
      return classification;
  }
}