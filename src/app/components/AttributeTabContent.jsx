import React from "react";
import ReactDataGrid from "react-data-grid/addons.js";

export default class AttributeTabContent extends React.Component{
  render(){
    return(
      <ReactDataGrid
        enableCellSelect={true}
        columns={this.columns}
        rowGetter={this.rowGetter}
        rowsCount={this.props.attributes.length}
        onRowUpdated={this.handleRowUpdated}
        />
    )
  };

  constructor(props){
    super(props);
    this.state = {clsId: props.product.classificationId, clsGrpId: props.product.classificationGroupId};
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
    this.mergeAttributeValuesWithAttributes(props);
  }

  componentWillReceiveProps(nextProps){
    if(this.state.clsId !== nextProps.product.classificationId || this.state.clsGrpId !== nextProps.product.classificationGroupId){
      this.mergeAttributeValuesWithAttributes(nextProps);
    }
  }

  mergeAttributeValuesWithAttributes = (props) => {
    let {attributes, product} = this.props;
    let attributeValues = attributes.map( (a) => {
      let value = product.attributeValues.filter((v) => {return v.attributeId === a.attributeId});
      if(value.length !==0) value = value[0].value || "";
      else value = "";
      return {attributeId: a.attributeId, value: value};
    });
    props.updateAttributeValues(attributeValues);
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
    let value = product.attributeValues.filter((v) => {return v.attributeId === attribute.attributeId});
    if(value.length !==0) value = value[0].value || "";
    else value = "";
    return Object.assign({}, attribute, {value: value});
  };

}