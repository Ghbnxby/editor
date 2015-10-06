import { UPDATE_ATTRIBUTEVALUE } from '../actions/product';

export default function attributeValue(attributeValue = [], action) {
  switch (action.type) {
    case UPDATE_ATTRIBUTEVALUE:
      return action.array || [];
    default:
      return attributeValue;
  }
}