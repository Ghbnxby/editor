import React from "react";
import {Tabs, Tab, Button, ButtonToolbar, Glyphicon} from "react-bootstrap";
import ProductTabContent from "./ProductTabContent.jsx";
import PriceTabContent from "./PriceTabContent.jsx";
import ClassificationTabContent from "./ClassificationTabContent.jsx";
import AttributeTabContent from "./AttributeTabContent.jsx"
import QuantityTabContent from "./QuantityTabContent.jsx"

export default class ProductEditorTab extends React.Component{
  render(){
    let buttonStyle = {marginBottom: "5px", marginTop: "5px"};

    return (
      <div>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect}>
          <Tab eventKey={1} title={<h4>Product</h4>}><ProductTabContent {...this.props}/></Tab>
          <Tab eventKey={2} title={<h4>Classification</h4>}><ClassificationTabContent {...this.props}/></Tab>
          <Tab eventKey={3} title={<h4>Attributes</h4>}><div className="col-md-12" style={{paddingLeft: "0px"}}><AttributeTabContent {...this.props}/></div></Tab>
          <Tab eventKey={4} title={<h4>Price</h4>}><PriceTabContent {...this.props}/></Tab>
          <Tab eventKey={5} title={<h4>Quantity</h4>}><div className="col-md-12" style={{paddingLeft: "0px"}}><QuantityTabContent {...this.props}/></div></Tab>
        </Tabs>
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
      </div>
    );
  };

  constructor(props){
    super(props);
    this.state = {key: 5};
  }

  handleSelect = (key) => {
    this.setState({key: key});
  }

  handleSave = () => {
    console.log(this.props);
  }
}