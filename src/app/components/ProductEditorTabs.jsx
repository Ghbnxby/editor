import React from "react";
import {Tabs, Tab, Button} from "react-bootstrap";
import ProductTabContent from "./ProductTabContent.jsx"

export default class ProductEditorTab extends React.Component{
  render(){
    return (
      <div>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect}>
          <Tab eventKey={1} title={<h4>Product</h4>}><ProductTabContent/></Tab>
          <Tab eventKey={2} title={<h4>Attributes</h4>}>Attributes</Tab>
          <Tab eventKey={3} title={<h4>Classification</h4>}>Classification</Tab>
        </Tabs>
        <div className="col-sm-12">
          <div className="pull-right">
            <Button bsStyle="primary">Save</Button>
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
}