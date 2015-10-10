import React from "react";
import {Button, ButtonToolbar, Glyphicon} from "react-bootstrap";

export default class ProductEditorToolbar extends React.Component{
  render(){
    let buttonStyle = {marginBottom: "5px", marginTop: "5px"};
    return(
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
    )
  };
}