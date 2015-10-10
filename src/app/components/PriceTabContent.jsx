import React from "react";
import {Input} from "react-bootstrap";

export default class PriceTabContent extends React.Component{
  render(){
    let {price} = this.props.product;
    let discountInput;
    let discount;
    if(this.state.discountType === "percent") discount = price.discountPercent;
    if(this.state.discountType === "amount") discount = price.discountValue;
    if(this.state.discountType !== "none") discountInput = (<Input type="text" label="Discount" value={discount} onChange={this.changeDiscount}/>);

    return(
      <div style={{marginTop: "20px"}}>
        <div className="col-sm-6">
          <Input type="text" label="Price" value={price.value} onChange={this.changePrice}/>
        </div>
        <div className="col-sm-6">
          <Input type="select" label="Discount type" value={this.state.discountType} onChange={this.onChangeDiscountType}>
            <option value="none">None</option>
            <option value="percent">Percent</option>
            <option value="amount">Amount</option>
          </Input>
          {discountInput}
        </div>
      </div>
    )
  };

  constructor(props){
    super(props);
    let discountType = 'none';
    if(props.product.price.discountValue) discountType = 'amount';
    if(props.product.price.discountPercent) discountType = 'percent';
    this.state={discountType: discountType};
  }

  onChangeDiscountType = (e) => {
    if(e.target.value === 'none') {
      let {price} = this.props.product;
      price.discountPercent = "";
      price.discountValue = "";
      this.props.updatePrice(price);
    }
    this.setState({discountType: e.target.value});
  };

  changePrice = (e) => {
    let {price} = this.props.product;
    price.value = e.target.value;
    this.props.updatePrice(price);
  };

  changeDiscount = (e) => {
    let {price} = this.props.product;
    if(this.state.discountType === "percent"){
      price.discountPercent = e.target.value;
      price.discountValue = "";
    } else if(this.state.discountType === "amount") {
      price.discountPercent = "";
      price.discountValue = e.target.value;
    }
    this.props.updatePrice(price);
  };
}