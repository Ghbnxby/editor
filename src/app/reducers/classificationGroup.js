import { UPDATE_CLASSIFICATIONGROUP } from '../actions/product';

export default function classificationGroup(classificationGroup = '', action) {
  switch (action.type) {
    case UPDATE_CLASSIFICATIONGROUP:
      return action.value || "";
    default:
      return classificationGroup;
  }
}