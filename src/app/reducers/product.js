import {
  UPDATE_PRODUCTID,
  UPDATE_CATALOGID,
  UPDATE_CLSIDANDCLSGRPID,
  UPDATE_STATUSID,
  UPDATE_DESCRIPTION,
  UPDATE_LONGDESCRIPTION,
  UPDATE_MANUFACTURER,
  UPDATE_PRICE,
  UPDATE_ATTRIBUTEVALUES,
  UPDATE_QUANTITIES
} from '../actions/product';

const initialState = {
  productId: "",
  catalogId: "",
  classificationId: "",
  classificationGroupId: "",
  statusId: "",
  description: "",
  longDescription: "",
  manufacturer: "",
  price : {},
  attributeValues: [],
  quantities: []
};

export default function product(product = initialState, action) {
  switch (action.type) {
    case UPDATE_PRODUCTID:
      return Object.assign({}, product, {
      productId: action.value
    });
    case UPDATE_CATALOGID:
      return Object.assign({}, product, {
        catalogId: action.value
      });
    case UPDATE_CLSIDANDCLSGRPID:
      return Object.assign({}, product, {
        classificationId: action.classificationId,
        classificationGroupId: action.classificationGroupId
      });
    case UPDATE_STATUSID:
      return Object.assign({}, product, {
        statusId: action.value
      });
    case UPDATE_DESCRIPTION:
      return Object.assign({}, product, {
        description: action.value
      });
    case UPDATE_LONGDESCRIPTION:
      return Object.assign({}, product, {
        longDescription: action.value
      });
    case UPDATE_MANUFACTURER:
      return Object.assign({}, product, {
        manufacturer: action.value
      });
    case UPDATE_PRICE:
      return Object.assign({}, product, {
        price: action.price
      });
    case UPDATE_ATTRIBUTEVALUES:
      return Object.assign({}, product, {
        attributeValues: action.array
      });
    case UPDATE_QUANTITIES:
      return Object.assign({}, product, {
        quantities: action.array
      });
    default:
      return product;
  }
}