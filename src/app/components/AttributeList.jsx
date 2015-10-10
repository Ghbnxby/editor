import React from "react";
import {Button, ButtonToolbar, Glyphicon, Collapse, Well} from "react-bootstrap";

export default class AttributeList extends React.Component{

  render(){
    if(!this.props.attributes) return null;
    let self = this;
    return(
      <div className="list-group">
        <li className="list-group-item active">Attribute list</li>
        {
          this.props.attributes.map((attribute) => {
            let glyphInfo;
            let collapse;
            if(attribute.options){
              let visibility = self.state.visibility[attribute.attributeId];
              glyphInfo = (<Glyphicon glyph={visibility ? "menu-down" : "menu-right"}/>);
              collapse = (
                <Collapse in={visibility}>
                  <div>
                    <Well>
                      <ul className="list-group">
                        <li className="list-group-item active">Possible values</li>
                        {attribute.options.map((v)=> {return (<li className="list-group-item">{v}</li>)})}
                      </ul>
                    </Well>
                  </div>
                </Collapse>
              )
            }
            return(
              <div key={attribute.attributeId}>
                <Button className="list-group-item" onClick={() => self.updateAttributeInfoVisibility(attribute.attributeId)}>
                  {glyphInfo}
                  {attribute.description}({attribute.attributeId})
                </Button>
                {collapse}
              </div>
            )
          })
        }
      </div>
    )
  };

  static propTypes = {
    attributes: React.PropTypes.array
  };

  constructor(props){
    super(props);
    this.state = {visibility: {}}
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({visibility: {}});
  };

  updateAttributeInfoVisibility = (id) => {
    let visibility = this.state.visibility;
    visibility[id] = visibility[id] ? false : true;
    this.setState({visibility: visibility});
  }
}