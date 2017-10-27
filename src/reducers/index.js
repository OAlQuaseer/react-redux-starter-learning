import { combineReducers } from 'redux';
//import fuelSavings from './fuelSavingsReducer';
import { routerReducer } from 'react-router-redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  //fuelSavings,
  //short hand property name.
  //courses: courses,
  courses,
  routing: routerReducer
});

export default rootReducer;
