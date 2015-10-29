import React from "react";
import {Modal, Button, Glyphicon} from "react-bootstrap";


export default class MultiValueInput extends React.Component{
  render(){
    return(
      <Modal show={this.state.show} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Multi Value Editor</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="link" onClick={this.close}>Close</Button>
          <Button bsStyle="primary" onClick={this.save}> <Glyphicon glyph="save"/> Save</Button>
        </Modal.Footer>
      </Modal>
    )
  };

  static propTypes = {
    attribute: React.PropTypes.string,
    values: React.PropTypes.values
  };

  constructor(props){
    super(props);
    this.state = {value: this.props.values, show: false}
  }

  open = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({show: false});
  };

  save = () => {
    this.props.onSave(this.state.values);
  };
}
