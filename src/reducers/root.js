import statesHistory from './statesHistory';
import statesCurrent from './statesCurrent';
import mapData from './geoData';
import { combineReducers } from "redux";

export default combineReducers({
  statesHistory,
  statesCurrent,
  mapData
});