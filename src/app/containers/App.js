import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductEditor from '../components/ProductEditor.jsx';
import ClassificationTree from '../components/ClassificationTree.jsx';
import * as ProductActions from '../actions/product';
import * as ClassificationsActions from '../actions/classifications';
import * as AttributesActions from '../actions/attributes';
import * as ErrorsActions from '../actions/errors';

var actions = Object.assign({}, ProductActions, ClassificationsActions, AttributesActions, ErrorsActions);

function mapStateToProps(state) {
  return {
    product: state.product,
    classifications: state.classifications,
    attributes: state.attributes,
    errors: state.errors
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default{
  ProductEditor: connect(mapStateToProps, mapDispatchToProps)(ProductEditor)
}