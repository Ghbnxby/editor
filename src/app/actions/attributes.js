export const UPDATE_ATTRIBUTES = "UPDATE_ATTRIBUTES";

export function updateAttributes(array) {
  return {type: UPDATE_ATTRIBUTES, array: array};
}
