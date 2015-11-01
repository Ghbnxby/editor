import jQuery from "jquery";
import utils from "underscore";

export default class AttributeService{

  static mergeAttributeValuesWithAttributes = (attributes, attributeValues) => {
    return attributes.map( (a) => {
      let values = attributeValues.filter((v) => {return v.attributeId === a.attributeId});
      if(values.length !== 0) values = values[0].values;
      else values = [];
      return {attributeId: a.attributeId, values: values};
    });
  };

}
