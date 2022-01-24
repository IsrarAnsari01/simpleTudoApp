/* eslint-disable */

import {combineReducers} from 'redux';
import userReducer from '../reducers/userReducers';
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
