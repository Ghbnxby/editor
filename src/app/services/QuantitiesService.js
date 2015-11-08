import jQuery from "jquery";
import utils from "underscore";

export default class QuantitiesService{

  static getValidQuantities(quantities, attributeValues){
    if(quantities) {
      let attrVal4Q = attributeValues.filter((attributeValue) => {
        return attributeValue.values && attributeValue.values.length > 1
      });
      for (let i = 0; i < quantities.length; i++) {
        let quantity = quantities[i];
        let properties = quantity.properties;
        if (properties) {
          let updatedProps = {};
          for (let j = 0; j < attrVal4Q.length; j++) {
            let val = properties[attrVal4Q[j].attributeId];
            if (val !== null && val !== undefined && val !== '' && utils.contains(attrVal4Q[j].values, val)) {
              updatedProps[attrVal4Q[j].attributeId] = val;
            }
          }
          quantity.properties = updatedProps;
        }
      }
      return quantities;
    } else return [];
  }

}
