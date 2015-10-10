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

function bindStateToClassificationTree(state){
  return {
    classifications: state.classifications,
    classificationId: state.product.classificationId,
    classificationGroupId: state.product.classificationGroupId
  }
};

function bindActionsToClassificationTree(dispatch){
  let {updateClassificationId, updateClassificationGroupId} = ProductActions;
  return bindActionCreators({updateClassificationId, updateClassificationGroupId}, dispatch);
};

export default{
  ProductEditor: ProductEditor,
  ClassificationTree: connect(bindStateToClassificationTree, bindActionsToClassificationTree)(ClassificationTree)
}