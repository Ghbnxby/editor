import React from "react";
import {Input} from "react-bootstrap";

export default class ClassificationTabContent extends React.Component{
  render(){
    return(
      <div>
        <div className="col-sm-6">
          <Input type="select" label="Classification" value={this.props.classification} onChange={this.changeClassification}>
            <option value="accessories">accessories</option>
            <option value="shoes">shoes</option>
            <option value="clothes">clothes</option>
          </Input>
        </div>
        <div className="col-sm-6">
          <Input type="select" label="Classification Group" value={this.props.classificationGroup} onChange={this.changeClassificationGroup}>
            <option value="gumshoes">gumshoes</option>
            <option value="sneakers">sneakers</option>
          </Input>
        </div>
      </div>
    )
  };

  changeClassification = (e) => {
    this.props.updateClassification(e.target.value);
  }

  changeClassificationGroup = (e) => {
    this.props.updateClassificationGroup(e.target.value);
  }
}