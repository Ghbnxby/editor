import React from "react";
import {Input, Button, Glyphicon} from "react-bootstrap";
import SimpleInput from "./inputs/SimpleInput.jsx"


export default class AttributeValuesEditor extends React.Component{
  render(){
    let valueField = (<span style={{padding: '10px'}}>{this.props.values[0]}</span>);
    if(!this.state.disabled){
      valueField = (<SimpleInput ref="input" className="form-control" type={this.props.type} value={this.props.values[0]} onBlur={this.deactivate} onChange={this.props.onChange}/>)
    }
    return(
      <div className="input-group" style={{margin:'0'}} onDoubleClick={this.activate}>
        {valueField}
        <div className="input-group-btn">
          <Button bsStyle="link" onClick={this.activate}>
            <Glyphicon glyph="edit"/>
          </Button>
        </div>
      </div>
    )
  };


  static propTypes = {
    attribute: React.PropTypes.string,
    values: React.PropTypes.string
  };

  constructor(props){
    super(props);
    this.state = {disabled: true};
  }

  activate = () => {
    this.setState({disabled: false});
  };

  deactivate = () => {
    this.setState({disabled: true});
  };
}