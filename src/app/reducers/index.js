import { combineReducers } from 'redux';
import product from './product';
import classifications from './classifications';
import attributes from './attributes';

const rootReducer = combineReducers({
	product,
	classifications,
	attributes
});

export default rootReducer;