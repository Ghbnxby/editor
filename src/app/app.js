import React from 'react';
import { Provider } from 'react-redux';
import { ProductEditor } from './containers/App';
import configureStore from './store/configureStore';

function renderProductEditor(element, props){
  let {product, classifications} = props.data;
  let initialState = {product, classifications};
  let store = configureStore(initialState);
  window.stor = store;
  return React.render(
    <Provider store={store}>
      {() => <ProductEditor {...props}/>}
    </Provider>,
    element);
}

export default {
  renderProductEditor: renderProductEditor
}