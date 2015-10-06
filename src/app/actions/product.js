export const UPDATE_PRODUCTID = "UPDATE_PRODUCTID";
export const UPDATE_ATTRIBUTEVALUE = "UPDATE_ATTRIBUTEVALUE";
export const UPDATE_MANUFACTURE = "UPDATE_MANUFACTURE";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const UPDATE_DISCOUNT = "UPDATE_DISCOUNT";
export const UPDATE_CLASSIFICATION = "UPDATE_CLASSIFICATION";
export const UPDATE_CLASSIFICATIONGROUP = "UPDATE_CLASSIFICATIONGROUP";
export const UPDATE_CATALOGID = "UPDATE_CATALOGID";
export const UPDATE_SHORTDESCRIPTION = "UPDATE_SHORTDESCRIPTION";
export const UPDATE_LONGDESCRIPTION = "UPDATE_LONGDESCRIPTION";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const UPDATE_CLASSIFICATIONS = "UPDATE_CLASSIFICATIONS";

export function updateProductId(value) {
  return {type: UPDATE_PRODUCTID, value: value};
}

export function updateAttributeValue(array) {
  return {type: UPDATE_ATTRIBUTEVALUE, array: array};
}

export function updateManufacture(value) {
  return {type: UPDATE_MANUFACTURE, value: value};
}

export function updatePrice(value) {
  return {type: UPDATE_PRICE, value: value};
}

export function updateDiscount(value) {
  return {type: UPDATE_DISCOUNT, value: value};
}

export function updateClassification(value) {
  return {type: UPDATE_CLASSIFICATION, value: value};
}

export function updateClassificationGroup(value) {
  return {type: UPDATE_CLASSIFICATIONGROUP, value: value};
}

export function updateCatalogId(value) {
  return {type: UPDATE_CATALOGID, value: value};
}

export function updateShortDescription(value) {
  return {type: UPDATE_SHORTDESCRIPTION, value: value};
}

export function updateLongDescription(value) {
  return {type: UPDATE_LONGDESCRIPTION, value: value};
}

export function updateStatus(value) {
  return {type: UPDATE_STATUS, value: value};
}

export function updateQuantity(value) {
  return {type: UPDATE_QUANTITY, value: value};
}

export function updateClassifications(array) {
  return {type: UPDATE_CLASSIFICATIONS, array: array};
}
