import React from "react";
import ProductEditorTabs from "./ProductEditorTabs.jsx";
import ProductEditorToolbar from "./ProductEditorToolbar.jsx";

export default class ProductEditor extends React.Component{
  render(){
    return(
      <div>
        <ProductEditorTabs {...this.props}/>
        <ProductEditorToolbar {...this.props}/>
      </div>
    )
  };

  static propTypes = {
    product: React.PropTypes.object,
    classifications: React.PropTypes.array
  };
}