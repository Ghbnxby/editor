import React from "react";
import {Input, Button, Glyphicon} from "react-bootstrap";


export default class AttributeValuesEditor extends React.Component{

  renderInput = () => {
    return(
      <input type='text' {...this.props} ref="child" className="form-control" value={this.props.value} onChange={this.onChange} onBlur={this.props.onBlur}/>
    )
  };

  renderSelectBox = () => {
    return(
      <select {...this.props} ref="child" className="form-control" value={this.props.value} onChange={this.onChange} onBlur={this.props.onBlur}>
        <option key='-1' value={null}></option>
        {
          this.props.attribute.options.map((option, i) => {
            return(<option key={i} value={option.value}>{option.description || option.value}</option>)
          })
        }
      </select>
    )
  };

  render(){
    let input = this.renderInput;
    if(this.props.attribute.options && this.props.attribute.options.length !== 0 ){
      input = this.renderSelectBox;
    }
    return(input());
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
