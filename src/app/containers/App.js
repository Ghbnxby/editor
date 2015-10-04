import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductEditor from '../components/ProductEditor.jsx';
import * as ProductActions from '../actions/product';

function mapStateToProps(state) {
  return {
    productId: state.productId,
    attributeValue: state.attributeValue,
    catalogId: state.catalogId,
    classification: state.classification,
    classificationGroup: state.classificationGroup,
    discount: state.discount,
    longDescription: state.longDescription,
    shortDescription: state.shortDescription,
    manufacture: state.manufacture,
    price: state.price,
    quantity: state.quantity,
    status: state.status
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProductActions, dispatch);
}

export default{
  ProductEditor: connect(mapStateToProps, mapDispatchToProps)(ProductEditor)
}