import React from "react";
import {Tabs, Tab, Button, ButtonToolbar} from "react-bootstrap";
import ProductTabContent from "./ProductTabContent.jsx";
import PriceTabContent from "./PriceTabContent.jsx";
import ClassificationTabContent from "./ClassificationTabContent.jsx";
import AttributeTabContent from "./AttributeTabContent.jsx"

export default class ProductEditorTab extends React.Component{
  render(){
    let buttonStyle = {marginBottom: "5px", marginTop: "5px"};

    return (
      <div>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect}>
          <Tab eventKey={1} title={<h4>Product</h4>}><ProductTabContent {...this.props}/></Tab>
          <Tab eventKey={2} title={<h4>Classification</h4>}><ClassificationTabContent {...this.props}/></Tab>
          <Tab eventKey={3} title={<h4>Attributes</h4>}><AttributeTabContent {...this.props}/></Tab>
          <Tab eventKey={4} title={<h4>Price</h4>}><PriceTabContent {...this.props}/></Tab>
        </Tabs>
        <div className="col-sm-12" style={{backgroundColor: "#D3D3D3"}}>
          <div className="pull-right">
            <ButtonToolbar>
              <Button bsStyle="link" style={buttonStyle}>Cancel</Button>
              <Button style={buttonStyle}>Delete</Button>
              <Button bsStyle="primary" style={buttonStyle} onClick={this.handleSave}>Save</Button>
            </ButtonToolbar>
          </div>
        </div>
      </div>
    );
  };

  constructor(props){
    super(props);
    this.state = {key: 1};
  }

  handleSelect = (key) => {
    this.setState({key: key});
  }

  handleSave = () => {
    console.log(this.props);
  }
}