import React from "react";
import {Input} from "react-bootstrap";

export default class ProductTabContent extends React.Component{
  render(){
    let {product} = this.props;
    return(
      <div style={{marginTop: "20px"}}>
        <div className="col-sm-6">
          <Input type="text" label="ProductId" value={product.productId} onChange={this.changeProductId}/>
          <Input type="text" label="Catalog" value={product.catalogId} onChange={this.changeCatalogId}/>
          <Input type="text" label="Manufacture" value={product.manufacturer} onChange={this.changeManufacturer}/>
          <Input type="select" label="Status" value={product.statusId} onChange={this.changeStatusId}>
            <option value="new">New</option>
            <option value="active">Active</option>
            <option value="old">Old</option>
          </Input>
        </div>
        <div className="col-sm-6">
          <Input type="textarea" label="Description" value={product.description} onChange={this.changeDescription}/>
          <Input type="textarea" label="Long Description" value={product.longDescription} onChange={this.changeLongDescription}/>
        </div>
      </div>
    )
  };

  changeProductId = (e) => {
    this.props.updateProductId(e.target.value);
  };

  changeCatalogId = (e) => {
    this.props.updateCatalogId(e.target.value);
  };

  changeManufacturer = (e) => {
    this.props.updateManufacturer(e.target.value);
  };

  changeLongDescription = (e) => {
    this.props.updateLongDescription(e.target.value);
  };

  changeDescription = (e) => {
    this.props.updateDescription(e.target.value);
  };

  changeStatusId = (e) => {
    this.props.updateStatusId(e.target.value);
  };
}