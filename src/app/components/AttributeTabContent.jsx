import React from "react";
import {Input, Table} from "react-bootstrap";



export default class AttributeTabContent extends React.Component{
  render(){
    return(
      <div className="col-sm-12" style={{marginTop: "20px"}}>
        <Table responsive>
          <thead>
          <tr>
            <th>#</th>
            <th>Attribute</th>
            <th>Value</th>
            <th>isMultivalue</th>
            <th>Type</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          </tbody>
        </Table>
      </div>
    )
  };
}