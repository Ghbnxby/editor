import React from "react";
import ReactDataGrid from "react-data-grid/addons.js";

export default class QuantityTabContent extends React.Component{
  render(){
    return(
      <ReactDataGrid ref="grid"
        enableCellSelect={true}
        columns={this.state.columns}
        rowGetter={this.rowGetter}
        rowsCount={10}
        onRowUpdated={this.handleRowUpdated}
        />
    )
  };

  constructor(props){
    super(props);
    let columns = this.initColumns(props.attributeValue);
    this.state = {columns: columns};
  }

  componentWillReceiveProps = (nextProps) => {
    let columns = this.initColumns(nextProps.attributeValue);
    this.setState({columns: columns});
  };

  componentWillUpdate = ( nextProps,  nextState) =>{
    console.log(nextState)
  };

  initColumns = (attributeValues) => {
    let columns = [];
    attributeValues.forEach((value) => {
      columns.push({key: value.attributeId, name: value.description})
    });
    columns.push({key: 'quantity', name: "Quantity"});
    return columns;
  };

  handleRowUpdated = (e) => {
    //merge updated row with current row and rerender by setting state
    var attributeValues = this.props.attributeValue;
    Object.assign(attributeValues[e.rowIdx], e.updated);
    this.props.updateAttributeValue(attributeValues);
  };


  rowGetter = (i) => {
    return {"quantity": 0, "size": 42, "color": "yellow"};//this.props.attributeValue[i];
  };

}