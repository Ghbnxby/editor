import React from 'react';
import { Provider } from 'react-redux';
import { ProductEditor } from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

function renderProductEditor(element, props){
  return React.render(
    <Provider store={store}>
      {() => <ProductEditor {...props}/>}
    </Provider>,
    element);
}

export default {
  renderProductEditor: renderProductEditor
}