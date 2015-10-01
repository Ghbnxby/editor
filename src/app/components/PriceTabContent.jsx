import React from "react";
import {Input} from "react-bootstrap";

export default class PriceTabContent extends React.Component{
  render(){
    return(
      <div>
        <div className="col-sm-6">
          <Input type="text" label="Price"/>
        </div>
        <div className="col-sm-6">
          <Input type="text" label="Discount"/>
        </div>
      </div>
    )
  };
}