import React from "react";
import {Input, OverlayTrigger, Popover} from "react-bootstrap";

class ProductInput extends React.Component{
  render(){
    let {field, type, onChange, product, errors, label} = this.props;
    if(errors[field]){
      return(
        <OverlayTrigger trigger="focus" placement="bottom" overlay={<Popover className="text-danger">{errors[field]}</Popover>}>
          <Input type={type} label={label} value={product[field]} onChange={onChange} bsStyle= "error"/>
        </OverlayTrigger>
      );
    }
    return(<Input type={type} label={label} value={product[field]} onChange={onChange}/>);
  }
}

export default class ProductTabContent extends React.Component{
  render(){
    let {product, errors} = this.props;
    return(
      <div style={{marginTop: "20px"}}>
        <div className="col-sm-6">
          <ProductInput {...this.props} type="text" label="ProductId" field="productId" onChange={this.changeProductId}/>
          <ProductInput {...this.props} type="text" label="Catalog" field="catalogId" onChange={this.changeCatalogId}/>
          <ProductInput {...this.props} type="text" label="Manufacture" field="manufacturer" onChange={this.changeManufacturer}/>
          <Input type="select" label="Status" value={product.statusId} onChange={this.changeStatusId} bsStyle={errors.statusId ? "error" : ""}>
            <option value="new">New</option>
            <option value="active">Active</option>
            <option value="old">Old</option>
          </Input>
        </div>
        <div className="col-sm-6">
          <ProductInput {...this.props} type="textarea" label="Description"  field="description" onChange={this.changeDescription}/>
          <ProductInput {...this.props} type="textarea" label="Long Description" field="longDescription" onChange={this.changeLongDescription}/>
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