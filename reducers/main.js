import { combineReducers } from 'redux';
import changeProductReducer from './changeProductReducer';
import changeColorReducer from './changeColorReducer';


const rootReducer = combineReducers({
  changeProductReducer,
  changeColorReducer

});

export default rootReducer;