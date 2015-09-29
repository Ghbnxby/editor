import React from "react";
import {Input, ButtonInput} from "react-bootstrap";

export default class ProductTabContent extends React.Component{
  render(){
    return(
      <div>
        <div className="col-sm-6">
          <Input type="text" label="ProductId"/>
          <Input type="text" label="Catalog"/>
          <Input type="text" label="Quantity"/>
          <Input type="text" label="Manufacturer"/>
        </div>
        <div className="col-sm-6">
          <Input type="textarea" label="Short Description"/>
          <Input type="textarea" label="Long Description"/>
          <Input type="select" label="Is Serchable">
            <option value="false">no</option>
            <option value="true">yes</option>
          </Input>
        </div>
      </div>
    )
  };
}