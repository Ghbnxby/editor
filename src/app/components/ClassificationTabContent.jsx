import React from "react";
import {Input, ListGroup, ListGroupItem, Button, Glyphicon} from "react-bootstrap";
import ClassificationTree from "./ClassificationTree.jsx";
import AttributeList from "./AttributeList.jsx";

export default class ClassificationTabContent extends React.Component{
  render(){
    return(
      <div>
        <div className="col-sm-6" style={{marginTop: "20px"}}>
          <ClassificationTree {...this.props} show={this.state.show}/>
        </div>
        <div className="col-sm-1" style={{marginTop: "20px"}}>
          <Button onClick={() => {this.setState({show: !this.state.show})}}>
            <Glyphicon glyph={this.state.show ? 'arrow-up' : 'arrow-down'}/>
          </Button>
        </div>
        <div className="col-sm-5" style={{marginTop: "20px"}}>
          <AttributeList {...this.props}/>
        </div>
      </div>
    )
  };

  constructor(props){
    super(props);
    this.state = {show: true};
  }

}