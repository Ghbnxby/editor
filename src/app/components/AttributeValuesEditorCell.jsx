import React from "react";
import AttributeValueEditorInput from "./AttributeValuesEditorInput.jsx";
import {Table, Input, Glyphicon} from "react-bootstrap";


export default class AttributeValuesEditorCell extends React.Component{
  render(){
    let editableCellStyle = {padding: "0"};
    return(
      <td style={editableCellStyle} onClick={this.handleOnclick}>
        <AttributeValueEditorInput attribute={this.props.attribute} values={this.props.values} onChange={this.props.onChange}/>
      </td>
    )
  };

  static propTypes = {
    attribute: React.PropTypes.array,
    values: React.PropTypes.array
  };

  handleOnclick = (e) => {
    console.log(e);
  }

}