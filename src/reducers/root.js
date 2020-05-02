import statesHistory from './statesHistory';
import statesCurrent from './statesCurrent';
import { combineReducers } from "redux";

export default combineReducers({
  statesHistory,
  statesCurrent
});