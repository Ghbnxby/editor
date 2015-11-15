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
import ProductService from "../services/ProductService.js";
import jQuery from "jquery";
import DataUtil from "../services/DataUtil";
import Spinner from "react-loader";

export default class ProductEditorTab extends React.Component{
  render(){
    let quantityTab;
    let attributeTab;
    if(this.state.key === 5) quantityTab = <QuantityTabContent {...this.props}/>;
    if(this.state.key === 4) attributeTab = <AttributeTabContent {...this.props}/>;
    let buttonStyle = {marginBottom: "5px", marginTop: "5px"};
    let options = {
      lines: 13,
      length: 20,
      width: 10,
      radius: 30,
      corners: 1,
      rotate: 0,
      direction: 1,
      color: '#000',
      speed: 1,
      trail: 60,
      shadow: false,
      hwaccel: false,
      zIndex: 2e9,
      top: '50%',
      left: '50%',
      scale: 1.00
    };
    return (
      <div>
        <Spinner loaded={this.state.loaded} options={options}>
          <Tabs activeKey={this.state.key} onSelect={this.handleSelect} animation={false}>
            <Tab eventKey={1} title={<h4>Product</h4>}><ProductTabContent {...this.props}/></Tab>
            <Tab eventKey={2} title={<h4>Price</h4>} disabled={this.state.mode === 'create'}><PriceTabContent {...this.props}/></Tab>
            <Tab eventKey={3} title={<h4>Classification</h4>} disabled={this.state.mode === 'create'}><ClassificationTabContent {...this.props}/></Tab>
            <Tab eventKey={4} title={<h4>Attributes</h4>} disabled={this.state.mode === 'create'}/>
            <Tab eventKey={5} title={<h4>Quantity</h4>} disabled={this.state.mode === 'create'}/>
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
        </Spinner>
      </div>
    );
  };

  static propTypes = {
    product: React.PropTypes.object,
    classifications: React.PropTypes.array
  };

  constructor(props){
    super(props);
    this.state = {
      key: 1,
      product: JSON.parse(JSON.stringify(props.product)),
      mode: props.mode,
      loaded: true
    };
    this.dataUtil = new DataUtil(props.contextPath);
  }

  handleSelect = (key) => {
    this.synchronizeTabs();
    if(this.state.key !== key && JSON.stringify(ProductService.getFilteredProduct(this.state.product)) !== JSON.stringify(ProductService.getFilteredProduct(this.props.product))){
      this.refs.alert.show(() => {this.props.updateProduct(JSON.parse(JSON.stringify(this.state.product))); this.props.updateErrors({});this.setState({key: key})}, null);
    } else {
      this.setState({key: key});
    }
  };

  handleSave = () => {
    this.synchronizeTabs();
    let productStr = JSON.stringify(this.props.product);
    this.dataUtil.saveProduct(productStr, this.state.mode, this.onSuccess, this.onError, this.onLoad);
  };

  onLoad = () => {
    this.setState({
      loaded: false
    });
  };

  onSuccess = (errors) => {
    this.setState({loaded: true});
    if(Object.keys(errors).length > 0){
      this.props.updateErrors(errors);
    } else {
      this.setState({
        product: JSON.parse(JSON.stringify(this.props.product)),
        mode: 'edit'
      });
      this.props.updateErrors({});
    }
  };

  onError = () => {
    this.setState({loaded: true});
  };

  synchronizeTabs = () => {
    let filteredAttributeValues = AttributeService.mergeAttributeValuesWithAttributes(this.props.attributes, this.props.product.attributeValues);
    this.props.updateAttributeValues(filteredAttributeValues);
    let filteredQuantities = QuantitiesService.getValidQuantities(this.props.product.quantities, filteredAttributeValues);
    this.props.updateQuantities(filteredQuantities);
  }
}