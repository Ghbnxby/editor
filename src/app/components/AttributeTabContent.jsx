import React from "react";
import ReactDataGrid from "react-data-grid/addons.js";

export default class AttributeTabContent extends React.Component{
  render(){
    return(
      <ReactDataGrid
        enableCellSelect={true}
        columns={this.columns}
        rowGetter={this.rowGetter}
        rowsCount={this.props.attributeValue.length}
        onRowUpdated={this.handleRowUpdated}
        />
    )
  };

  constructor(props){
    super(props);
    this.columns = [
      {
        key: 'description',
        name: 'Attribute'
      },
      {
        key: 'value',
        name: 'Value',
        editable: true
      },
      {
        key: 'isMultivalue',
        name: 'IsMultivalue'
      },
      {
        key: 'type',
        name: 'Type'
      }
    ];
  }

  handleRowUpdated = (e) => {
    //merge updated row with current row and rerender by setting state
    var attributeValues = this.props.attributeValue;
    Object.assign(attributeValues[e.rowIdx], e.updated);
    this.props.updateAttributeValue(attributeValues);
  };


  rowGetter = (i) => {
    return this.props.attributeValue[i];
  };

}