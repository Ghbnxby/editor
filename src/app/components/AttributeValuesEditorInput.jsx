import React from "react";
import {Input, Button, Glyphicon} from "react-bootstrap";


export default class AttributeVasluesEditor extends React.Component{
  render(){
    return(
      <div className="input-group" style={{margin: "0"}}>
        <input className="form-control" style={{border: "0"}} type={this.props.type} value={this.props.values[0]} onChange={this.onChange}/>
        <div className="input-group-btn">
          <Button bsStyle="link">
            <Glyphicon glyph="edit"/>
          </Button>
        </div>
      </div>
    )
  };

  static propTypes = {
    attribute: React.PropTypes.string,
    values: React.PropTypes.value
  };

  onChange = (e) => {
    this.props.onChange([e.target.value])
  }
}