import React from "react";
import ReactDataGrid from "react-data-grid/addons.js";
import AttributeValuesEditor from "./AttributeValuesEditor.jsx";

export default class AttributeTabContent extends React.Component{
  render(){
    return(
      <div>
        <AttributeValuesEditor {...this.props}/>
      </div>
    )
  };

  handleRowUpdated = (e) => {
    //merge updated row with current row and rerender by setting state
    var attributeValues = this.props.product.attributeValues;
    Object.assign(attributeValues[e.rowIdx], e.updated);
    this.props.updateAttributeValues(attributeValues);
  };


  rowGetter = (i) => {
    let {attributes, product} = this.props;
    let attribute = attributes[i];
    let values = product.attributeValues.filter((v) => {return v.attributeId === attribute.attributeId});
    if(values.length !==0) values = values[0].values || "";
    else values = [];
    return Object.assign({}, attribute, {values: values});
  };

}