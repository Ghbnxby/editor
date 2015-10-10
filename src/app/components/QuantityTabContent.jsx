import React from "react";
import ReactDataGrid from "react-data-grid/addons.js";
import {Toolbar} from "react-data-grid/addons.js";

export default class QuantityTabContent extends React.Component{
  render(){
    return(
      <ReactDataGrid ref="rdg"
        enableCellSelect={true}
        enableRowSelect={true}
        columns={this.state.columns}
        rowGetter={this.rowGetter}
        rowsCount={10}
        onRowUpdated={this.handleRowUpdated}
        toolbar={<Toolbar onAddRow={this.handleAddRow}/>}
        />
    )
  };

  constructor(props){
    super(props);
    let columns = this.initColumns(props.product.attributeValues);
    this.state = {columns: columns};
  }

  componentWillReceiveProps = (nextProps) => {
    let columns = this.initColumns(nextProps.product.attributeValues);
    this.setState({columns: columns});
  };

  initColumns = (attributeValues) => {
    let columns = [];
    attributeValues.forEach((value) => {
      columns.push({key: value.attributeId, name: value.description})
    });
    columns.push({key: 'quantity', name: "Quantity", editable: true});
    return columns;
  };

  handleRowUpdated = (e) => {
    //merge updated row with current row and rerender by setting state
    var attributeValues = this.props.product.attributeValues;
    Object.assign(attributeValues[e.rowIdx], e.updated);
    this.props.updateAttributeValues(attributeValues);
  };

  rowGetter = (i) => {
    return {"quantity": 0, "size": 42, "color": "yellow"};//this.props.attributeValue[i];
  };

  handleAddRow = (e) => {}
}