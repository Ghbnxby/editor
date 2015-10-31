import React from "react";
import ReactDataGrid from "react-data-grid/addons.js";
import {Toolbar} from "react-data-grid/addons.js";
import QuantitiesService from "../services/QuantitiesService.js";
import utils from "underscore";

var AutoComplete = ReactDataGrid.Editors.AutoComplete;

export default class QuantityTabContent extends React.Component{
  render(){
    return(
      <ReactDataGrid ref="rdg"
        enableCellSelect={true}
        columns={this.state.columns}
        rowGetter={this.rowGetter}
        rowsCount={this.props.product.quantities.length}
        onRowUpdated={this.handleRowUpdated}
        toolbar={<Toolbar onAddRow={this.handleAddRow}/>}
        />
    )
  };

  constructor(props){
    super(props);
    let columns = this.initColumns(props.product.attributeValues);
    let validQuantities = QuantitiesService.getValidQuantities(props.product.quantities, props.product.attributeValues);
    this.props.updateQuantities(validQuantities);
    this.state = {columns: columns};
  }

  componentWillReceiveProps = (nextProps) => {
    let columns = this.initColumns(nextProps.product.attributeValues);
    this.setState({columns: columns});
  };

  initColumns = (attributeValues) => {
    let columns = [];
    let self = this;
    attributeValues.forEach((attributeValue) => {
      let attribute = self.getAttributeById(attributeValue.attributeId);
      if(attributeValue.values.length > 1) {
        let column = {
          key : attribute.attributeId,
          name : attribute.attributeId,
          editor : (<AutoComplete options={attributeValue.values.map((value, i) => {return {id: i, title: value}})}/>)
        };
        columns.push(column);
      }
    });
    columns.push({key: 'quantity', name: "quantity", editable: true});
    return columns;
  };

  handleRowUpdated = (e) => {
    if((e.updated.quantity !== undefined) || this.checkValue(e.cellKey, e.updated[e.cellKey] )) {
      let {quantities} = this.props.product;
      let quantity = quantities[e.rowIdx];
      let row = e.updated;
      quantity.quantity = row.quantity || quantity.quantity;
      delete row.quantity;
      Object.assign(quantity.properties, row);
      this.props.updateQuantities(quantities);
    }
  };

  checkValue = (attributeId, value) => {
    let attributeValue = this.getAttributeValueById(attributeId);
    if(attributeValue) {
      return utils.contains(attributeValue.values, value);
    }
    return false;
  };

  rowGetter = (i) => {
    let {quantities} = this.props.product;
    return Object.assign({}, {quantity: quantities[i].quantity || 0}, quantities[i].properties);
  };

  handleAddRow = (e) => {
    let {quantities} = this.props.product;
    let newRow = {};
    Object.assign(newRow, {quantity: 0});
    let properties = {};
    this.props.product.attributeValues.forEach((attributeValue) => {
      if(attributeValue.values.length > 1) {
        properties[attributeValue.attributeId] = null;
      }
    });
    Object.assign(newRow, {properties: properties});
    quantities.push(newRow);
    this.props.updateQuantities(quantities);
  };

  getAttributeById = (id) => {
    return this.props.attributes.filter((a) => {return a.attributeId === id})[0];
  };

  getAttributeValueById = (id) => {
    let attributeValue = this.props.product.attributeValues.filter((a) => {return a.attributeId === id});
    attributeValue = ((attributeValue.length > 0) ? attributeValue[0] : null);
    return attributeValue;
  };
}