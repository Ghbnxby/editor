import React from "react";
import {Modal, Button} from "react-bootstrap";

export default class ProductEditorTab extends React.Component{
  render(){
    return (
      <Modal {...this.props} onHide={this.hide} show={this.state.show} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You have unsaved changes.</p>
          <p>Continue without saving?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='link' onClick={this.cancel}>Cancel</Button>
          <Button bsStyle='primary' onClick={this.confirm}>Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  constructor(props){
    super(props);
    this.state = {show: false};
  }

  show = (onConfirm, onHide) => {
    this.setState({
      show: true,
      onConfirm: onConfirm,
      onHide: onHide
    });
  };

  hide = () => {
    this.setState({show: false});
  };

  confirm = () => {
    this.onConfirm();
    this.hide();
  };

  cancel = () => {
    this.onHide();
    this.hide();
  };

  onHide = () => {
    let {onHide} = this.state;
    if(typeof onHide === 'function') onHide();
  };

  onConfirm = () => {
    let {onConfirm} = this.state;
    if(typeof onConfirm === 'function') onConfirm();
  };
}