import React from "react";
import {Input} from "react-bootstrap";

export default class ClassificationTabContent extends React.Component{
  render(){
    return(
      <div>
        <div className="col-sm-6">
          <Input type="select" label="Classification">
            <option value="select">accessories</option>
            <option value="select">shoes</option>
            <option value="select">clothes</option>
          </Input>
        </div>
        <div className="col-sm-6">
          <Input type="select" label="Classification Group">
            <option value="select">gumshoes</option>
            <option value="other">sneakers</option>
          </Input>
        </div>
      </div>
    )
  };
}