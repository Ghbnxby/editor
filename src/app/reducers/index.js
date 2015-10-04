import { combineReducers } from 'redux';
import productId from './productId';
import attributeValue from './attributeValue';
import catalogId from './catalogId';
import classification from './classification';
import classificationGroup from './classificationGroup';
import discount from './discount';
import longDescription from './longDescription';
import manufacture from './manufacture';
import price from './price';
import quantity from './quantity';
import shortDescription from './shortDescription';
import status from './status';

const rootReducer = combineReducers({
	productId,
	attributeValue,
	catalogId,
	classification,
	classificationGroup,
	discount,
	longDescription,
	manufacture,
	price,
	quantity,
	shortDescription,
	status
});

export default rootReducer;