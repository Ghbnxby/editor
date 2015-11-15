import { combineReducers } from 'redux';
import product from './product';
import classifications from './classifications';
import attributes from './attributes';
import errors from './errors';

const rootReducer = combineReducers({
	product,
	classifications,
	attributes,
	errors
});

export default rootReducer;