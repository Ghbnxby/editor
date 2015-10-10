import { combineReducers } from 'redux';
import product from './product';
import classifications from './classifications';

const rootReducer = combineReducers({
	product,
	classifications
});

export default rootReducer;