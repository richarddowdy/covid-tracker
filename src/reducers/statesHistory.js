import {
  FETCH_STATES_HISTORY
} from "../actions/types";

export default function rootReducer (state = {}, action){

  switch(action.type) {

    case FETCH_STATES_HISTORY:
      /**
       * return {...state,
       *         loading: false?,
       *         error: false?, 
       *         data: {...action.statesHistor}
       *    }
       */
      return ({ ...action.statesHistory });

    default:
      return state;
  }
}