import React from "react";
import {Input, ListGroup, ListGroupItem} from "react-bootstrap";
import ClassificationTree from "./ClassificationTree.jsx";

export default class ClassificationTabContent extends React.Component{
  render(){
    return(
      <div>
        <div className="col-sm-6" style={{marginTop: "20px"}}>
          <ClassificationTree {...this.props}/>
        </div>
      </div>
    )
  };

}