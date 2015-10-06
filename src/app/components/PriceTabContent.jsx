import React from "react";
import {Input} from "react-bootstrap";

export default class PriceTabContent extends React.Component{
  render(){
    return(
      <div style={{marginTop: "20px"}}>
        <div className="col-sm-6">
          <Input type="text" label="Price" value={this.props.price} onChange={this.changePrice}/>
        </div>
        <div className="col-sm-6">
          <Input type="text" label="Discount" value={this.props.discount} onChange={this.changeDiscount}/>
        </div>
      </div>
    )
  };

  changePrice = (e) => {
    this.props.updatePrice(e.target.value);
  }

  changeDiscount = (e) => {
    this.props.updateDiscount(e.target.value);
  }
}