import React from "react";
import {Input} from "react-bootstrap";

export default class ProductTabContent extends React.Component{
  render(){
    return(
      <div>
        <div className="col-sm-6">
          <Input type="text" label="ProductId" value={this.props.productId} onChange={this.changeProductId}/>
          <Input type="text" label="Catalog" value={this.props.catalogId} onChange={this.changeCatalogId}/>
          <Input type="text" label="Quantity" value={this.props.quantity} onChange={this.changeQuantity}/>
          <Input type="text" label="Manufacture" value={this.props.manufacture} onChange={this.changeManufacture}/>
        </div>
        <div className="col-sm-6">
          <Input type="textarea" label="Short Description" value={this.props.shortDescription} onChange={this.changeShortDescription}/>
          <Input type="textarea" label="Long Description" value={this.props.longDescription} onChange={this.changeLongDescription}/>
          <Input type="select" label="Status" value={this.props.status} onChange={this.changeStatus}>
            <option value="new">New</option>
            <option value="active">Active</option>
            <option value="old">Old</option>
          </Input>
        </div>
      </div>
    )
  };

  changeProductId = (e) => {
    this.props.updateProductId(e.target.value);
  }

  changeCatalogId = (e) => {
    this.props.updateCatalogId(e.target.value);
  }

  changeQuantity = (e) => {
    this.props.updateQuantity(e.target.value);
  }

  changeManufacture = (e) => {
    this.props.updateManufacture(e.target.value);
  }

  changeLongDescription = (e) => {
    this.props.updateLongDescription(e.target.value);
  }

  changeShortDescription = (e) => {
    this.props.updateShortDescription(e.target.value);
  }

  changeStatus = (e) => {
    this.props.updateStatus(e.target.value);
  }
}