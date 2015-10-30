import React from "react";
import {Input, Button, Glyphicon} from "react-bootstrap";
import MultiValueModalEditor from "./MultiValueModalEditor.jsx";


export default class MultiValueInput extends React.Component{
  render(){
    return(
      <div className="input-group" style={{margin:'0'}} onClick={this.openModalEditor}>
        <span style={{padding: '10px'}}>{this.props.values.join(',')}</span>
        <div className="input-group-btn">
          <Button bsStyle="link" onClick={this.openModalEditor}>
            <Glyphicon glyph="edit"/>
          </Button>
        </div>
        <MultiValueModalEditor ref="modalEditor" values={this.props.values} attribute={this.props.attribute} onSave={this.props.onChange}/>
      </div>
    )
  };

  static propTypes = {
    attribute: React.PropTypes.string,
    values: React.PropTypes.value
  };

  openModalEditor = () => {
    this.refs.modalEditor.open();
  }
}
