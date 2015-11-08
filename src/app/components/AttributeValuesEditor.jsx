import React from "react";
import {Table, Input} from "react-bootstrap";
import AttributeValuesEditorCell from "./AttributeValuesEditorCell.jsx";
import AttributeService from "../services/AttributeService.js";


export default class AttributeValuesEditor extends React.Component{
  render(){
    let self = this;
    return(
      <Table striped bordered condensed hover style={{marginBottom: "0px"}}>
        <thead>
        <tr>
          <th>Attribute</th>
          <th>Value</th>
          <th>Type</th>
          <th>IsMultivalue</th>
        </tr>
        </thead>
        <tbody>
        {
          this.props.product.attributeValues.map((attributeValue, i) => {
            let attribute = self.getAttributeById(attributeValue.attributeId);
            return (
              <tr style={{backgroundColor: i%2 === 0 ? '#eee' : ''}}>
                <td>{attribute.description}</td>
                <AttributeValuesEditorCell attribute={attribute} values={attributeValue.values} onChange={(values) => {self.updateAttributeValue(attribute.attributeId, values)}}/>
                <td>{attribute.type}</td>
                <td>{attribute.isMultivalue}</td>
              </tr>
            )
          })
        }
        </tbody>
      </Table>
    )
  };

  static propTypes = {
    attributes: React.PropTypes.array,
    attributeValues: React.PropTypes.array
  };

  updateAttributeValue(id, values){
    let {attributeValues} = this.props.product;
    let attributeValue = attributeValues.filter((v) => {return v.attributeId === id})[0];
    let index = attributeValues.indexOf(attributeValue);
    attributeValues[index] = {attributeId: id, values: values};
    this.props.updateAttributeValues(attributeValues);
  }

  mergeAttributeValuesWithAttributes = (props) => {
    let {attributes, product} = this.props;
    let attributeValues = AttributeService.mergeAttributeValuesWithAttributes(attributes, product.attributeValues);
    props.updateAttributeValues(attributeValues);
  };

  getAttributeById = (id) => {
    return this.props.attributes.filter((a) => {return a.attributeId === id})[0]
  }
}