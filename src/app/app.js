import Hello from "./components/Hello.jsx"
import React from "react";

function hello(element, props){
  return React.render(<Hello {...props}/>, element);
}

export default {
  hello: hello
}