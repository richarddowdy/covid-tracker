import {
  FETCH_STATES_HISTORY,
  FAILED_LOAD_HISTORY
} from "../actions/types";

const INITIALSTATE = {
  error: false,
  data: {}
}

export default function rootReducer(state = INITIALSTATE, action) {

  switch (action.type) {

    case FAILED_LOAD_HISTORY:
      return ({
        ...state,
        error: action.error
      })

    case FETCH_STATES_HISTORY:

      return ({
        ...state,
        error: false,
        data: { ...action.statesHistory }
      })

    default:
      return state;
  }
}