import React from "react";
import AttributeValueEditorInput from "./AttributeValuesEditorInput.jsx";
import MultiValueEditorInput from "./inputs/MultiValueEditorInput.jsx";
import {Table, Input, Glyphicon} from "react-bootstrap";


export default class AttributeValuesEditorCell extends React.Component{
  render(){
    let editableCellStyle = {padding: "0", verticalAlign: 'middle'};
    let input = (<AttributeValueEditorInput attribute={this.props.attribute} values={this.props.values} onChange={(value) => {this.props.onChange([value])}}/>);
    let {isMultivalue} = this.props.attribute;
    if(isMultivalue === true || isMultivalue === 'true'){
      input = (<MultiValueEditorInput attribute={this.props.attribute} values={this.props.values} onChange={this.props.onChange}/>);
    }
    return(
      <td style={editableCellStyle}>
        {input}
      </td>
    )
  };

  static propTypes = {
    attribute: React.PropTypes.object,
    values: React.PropTypes.array
  };

}