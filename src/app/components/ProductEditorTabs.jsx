import React from "react";
import {Tabs, Tab} from "react-bootstrap";
import ProductTabContent from "./ProductTabContent.jsx";
import PriceTabContent from "./PriceTabContent.jsx";
import ClassificationTabContent from "./ClassificationTabContent.jsx";
import AttributeTabContent from "./AttributeTabContent.jsx";
import QuantityTabContent from "./QuantityTabContent.jsx";

export default class ProductEditorTab extends React.Component{
  render(){
    let quantityTab;
    let attributeTab;
    if(this.state.key === 5) quantityTab = <QuantityTabContent {...this.props}/>;
    if(this.state.key === 3) attributeTab = <AttributeTabContent {...this.props}/>;
    return (
      <div>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} animation={false}>
          <Tab eventKey={1} title={<h4>Product</h4>}><ProductTabContent {...this.props}/></Tab>
          <Tab eventKey={2} title={<h4>Classification</h4>}><ClassificationTabContent {...this.props}/></Tab>
          <Tab eventKey={3} title={<h4>Attributes</h4>}/>
          <Tab eventKey={4} title={<h4>Price</h4>}><PriceTabContent {...this.props}/></Tab>
          <Tab eventKey={5} title={<h4>Quantity</h4>}/>
        </Tabs>
        <div className="col-md-12" style={{paddingLeft: "0px", paddingRight: "0px"}}>
          {attributeTab}
        </div>
        <div className="col-md-12" style={{paddingLeft: "0px"}}>
          {quantityTab}
        </div>
      </div>
    );
  };

  static propTypes = {
    product: React.PropTypes.object,
    classifications: React.PropTypes.array
  };

  constructor(props){
    super(props);
    this.state = {key: 1};
  }

  handleSelect = (key) => {
    this.setState({key: key});
  };
}