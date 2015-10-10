import React from "react";
import ProductEditorTabs from "./ProductEditorTabs.jsx";
import ProductEditorToolbar from "./ProductEditorToolbar.jsx";

export default class ProductEditor extends React.Component{
  render(){
    return(
      <div>
        <ProductEditorTabs/>
        <ProductEditorToolbar/>
      </div>
    )
  };
}