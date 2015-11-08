import jQuery from "jquery";
import utils from "underscore";

export default class ProductService{

  static getFilteredProduct(product){
    let {attributeValues} = product;
    attributeValues = attributeValues.filter((v) => {return v.values.length});
    attributeValues.sort((a, b) => {
      if (a.attributeId > b.attributeId) {
        return 1;
      }
      if (a.attributeId < b.attributeId) {
        return -1;
      }
      return 0;
    });
    product.attributeValues = attributeValues;
    return product;
  }

}
