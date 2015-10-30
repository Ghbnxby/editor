import React from "react";
import {Input, Button, Glyphicon} from "react-bootstrap";


export default class AttributeValuesEditor extends React.Component{
  render(){
    return(
      <input type='text' {...this.props} ref="child" className="form-control" value={this.props.value} onChange={this.onChange} onBlur={this.props.onBlur}/>
    )
  };

  static propTypes = {
    attribute: React.PropTypes.string,
    value: React.PropTypes.string
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){
    React.findDOMNode(this.refs.child).focus();
  }

  onChange = (e) => {
    this.props.onChange(e.target.value);
  }
}
