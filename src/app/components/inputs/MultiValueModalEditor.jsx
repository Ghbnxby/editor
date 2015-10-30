import React from "react";
import {Modal, Button, Glyphicon} from "react-bootstrap";
import SimpleInput from "./SimpleInput.jsx";
import utils from "underscore";


export default class MultiValueInput extends React.Component{
  render(){
    let self = this;
    return(
      <Modal show={this.state.show} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Multi Value Editor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className='table'>
            <tr>
              <td style={{border: 'none'}}>
                {
                  this.state.values.map((obj, i) => {
                    return (
                      <div className="input-group" style={{margin: "10px"}}>
                        <SimpleInput key={i} ref={i} value={obj.value} onChange={(val) => self.changeById(val, obj.id)}/>
                        <span className="input-group-btn">
                          <Button bsStyle="link" onClick={() => self.deleteById(obj.id)}>
                            <Glyphicon glyph="remove"/>
                          </Button>
                        </span>
                      </div>
                    )
                  })
                }
              </td>
              <td style={{border: 'none', verticalAlign: 'top'}}>
                <Button bsStyle="link" onClick={this.addNewValue} style={{margin: "13px"}}>
                  <Glyphicon glyph="plus"/>
                </Button>
              </td>
            </tr>
          </table>
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
    this.init(props.values)
  }

  init(values){
    values = values || [null];
    values = values.map((value, i) => {return {id: i, value: value}});
    this.state = {
      values: values,
      show: false
    }
  }

  open = () => {
    this.setState({ show: true });
    this.init(this.props.values);
  };

  close = () => {
    this.setState({show: false});
  };

  save = () => {
    this.props.onSave(this.getValues());
    this.close();
  };

  getValues = () => {
    return this.state.values.map((obj) => {return obj.value}).filter((value) => {return value !== null && value !== ''});
  };

  changeById = (value, id) => {
    let {values} = this.state;
    let obj = values.filter((obj) => {return obj.id === id})[0];
    let index = values.indexOf(obj);
    obj.value = value;
    values[index] = obj;
    this.setState({values: values});
  };

  deleteById = (id) => {
    let {values} = this.state;
    let obj = values.filter((obj) => {return obj.id === id})[0];
    values = utils.without(values, obj);
    this.setState({values: values});
  };

  addNewValue = () => {
    let value = {id: this.getMaxId() + 1, value: null};
    let {values} = this.state;
    values.push(value);
    this.setState({values: values});
  };


  getMaxId() {
    let {values} = this.state;
    return utils.max(values.map((obj) => {return obj.id}));
  };
}
