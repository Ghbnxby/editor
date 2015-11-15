export const UPDATE_ERRORS = "UPDATE_ERRORS";

export function updateErrors(errors) {
  return {type: UPDATE_ERRORS, errors: errors};
}
