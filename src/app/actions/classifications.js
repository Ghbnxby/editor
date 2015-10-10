export const UPDATE_CLASSIFICATIONS = "UPDATE_CLASSIFICATIONS";

export function updateClassifications(array) {
  return {type: UPDATE_CLASSIFICATIONS, array: array};
}
