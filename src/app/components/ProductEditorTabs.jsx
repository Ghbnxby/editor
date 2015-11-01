import React from "react";
import {Tabs, Tab, Button, ButtonToolbar, Glyphicon} from "react-bootstrap";
import ProductTabContent from "./ProductTabContent.jsx";
import PriceTabContent from "./PriceTabContent.jsx";
import ClassificationTabContent from "./ClassificationTabContent.jsx";
import AttributeTabContent from "./AttributeTabContent.jsx";
import QuantityTabContent from "./QuantityTabContent.jsx";
import AlertModal from "./AlertModal.jsx";
import QuantitiesService from "../services/QuantitiesService.js";
import AttributeService from "../services/AttributeService.js";

export default class ProductEditorTab extends React.Component{
  render(){
    let quantityTab;
    let attributeTab;
    if(this.state.key === 5) quantityTab = <QuantityTabContent {...this.props}/>;
    if(this.state.key === 4) attributeTab = <AttributeTabContent {...this.props}/>;
    let buttonStyle = {marginBottom: "5px", marginTop: "5px"};
    return (
      <div>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} animation={false}>
          <Tab eventKey={1} title={<h4>Product</h4>}><ProductTabContent {...this.props}/></Tab>
          <Tab eventKey={2} title={<h4>Price</h4>}><PriceTabContent {...this.props}/></Tab>
          <Tab eventKey={3} title={<h4>Classification</h4>}><ClassificationTabContent {...this.props}/></Tab>
          <Tab eventKey={4} title={<h4>Attributes</h4>}/>
          <Tab eventKey={5} title={<h4>Quantity</h4>}/>
        </Tabs>
        <div className="col-md-12" style={{paddingLeft: "0px", paddingRight: "0px"}}>
          {attributeTab}
        </div>
        <div className="col-md-12" style={{paddingLeft: "0px"}}>
          {quantityTab}
        </div>
        <div className="col-sm-12" style={{backgroundColor: "#D3D3D3"}}>
          <div className="pull-right">
            <ButtonToolbar>
              <Button bsStyle="link" style={buttonStyle}>Cancel</Button>
              <Button style={buttonStyle}><Glyphicon glyph="duplicate"/> Duplicate</Button>
              <Button style={buttonStyle}><Glyphicon glyph="trash"/> Delete</Button>
              <Button bsStyle="primary" style={buttonStyle} onClick={this.handleSave}><Glyphicon glyph="save"/> Save</Button>
            </ButtonToolbar>
          </div>
        </div>
        <AlertModal ref='alert'/>
      </div>
    );
  };

  static propTypes = {
    product: React.PropTypes.object,
    classifications: React.PropTypes.array
  };

  constructor(props){
    super(props);
    this.state = {key: 1, product: JSON.parse(JSON.stringify(props.product))};
  }

  handleSelect = (key) => {
    this.synchronizeTabs();
    console.log(JSON.stringify(this.state.product));
    console.log(JSON.stringify(this.props.product));
    if(JSON.stringify(this.state.product) !== JSON.stringify(this.props.product) && this.state.key !== key){
      this.refs.alert.show(() => {this.props.updateProduct(JSON.parse(JSON.stringify(this.state.product)));this.setState({key: key})}, null);
    } else {
      this.setState({key: key});
    }
  };

  handleSave = () => {
    this.synchronizeTabs();
    this.setState({product: JSON.parse(JSON.stringify(this.props.product))});
  };

  synchronizeTabs = () => {
    let filteredAttributeValues = AttributeService.mergeAttributeValuesWithAttributes(this.props.attributes, this.props.product.attributeValues);
    this.props.updateAttributeValues(filteredAttributeValues);
    let filteredQuantities = QuantitiesService.getValidQuantities(this.props.product.quantities, filteredAttributeValues);
    this.props.updateQuantities(filteredQuantities);
  }
}