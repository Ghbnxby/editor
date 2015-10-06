import React from "react";
import ProductEditorTabs from "./ProductEditorTabs.jsx";

export default class ProductEditor extends React.Component{
  render(){
    return(<ProductEditorTabs {...this.props}/>)
  };

  constructor(props){
    super(props);
    let {product, classifications} = props.data;
    props.updateProductId(product.productId);
    props.updatePrice(product.price ? product.price.value : 0);
    props.updateDiscount(product.price ? product.price.discount : 0);
    props.updateManufacture(product.manufacture);
    props.updateClassification(product.classificationId);
    props.updateStatus(product.statusId);
    props.updateClassificationGroup(product.classificationGroupId);
    props.updateAttributeValue(product.attributeValues);
    props.updateShortDescription(product.shortDescription);
    props.updateLongDescription(product.longDescription);
    props.updateQuantity(product.quantity);
    props.updateCatalogId(product.catalogId);
    props.updateClassifications(classifications);
  }
}