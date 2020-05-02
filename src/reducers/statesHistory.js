import {
  FETCH_STATES_HISTORY
} from "../actions/types";

export default function rootReducer (state = {}, action){

  switch(action.type) {

    case FETCH_STATES_HISTORY:
      return ({ ...state, ...action.statesHistory  });

    default:
      return state;
  }
}