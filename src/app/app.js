import ProductEditor from "./components/ProductEditor.jsx"
import React from "react";

function renderProductEditor(element, props){
  return React.render(<ProductEditor {...props}/>, element);
}

export default {
  renderProductEditor: renderProductEditor
}