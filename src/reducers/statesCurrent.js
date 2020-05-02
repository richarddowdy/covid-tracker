import {
  FETCH_STATES_CURRENT
} from "../actions/types";

export default function rootReducer (state = [], action){

  switch(action.type) {

    case FETCH_STATES_CURRENT:
      // console.log("in reducer", action.statesCurrentData)
      return ([...action.statesCurrentData]);

    default:
      return state;
  }
}