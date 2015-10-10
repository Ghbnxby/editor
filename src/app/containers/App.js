import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductEditor from '../components/ProductEditor.jsx';
import ClassificationTree from '../components/ClassificationTree.jsx';
import * as ProductActions from '../actions/product';

function mapStateToProps(state) {
  return {
    product: state.product,
    classifications: state.classifications
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProductActions, dispatch);
}

export default{
  ProductEditor: connect(mapStateToProps, mapDispatchToProps)(ProductEditor)

}