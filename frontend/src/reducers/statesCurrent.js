import {
  FETCH_STATES_CURRENT,
  FAILED_LOAD_CURRENT
} from "../actions/types";

const INITIALSTATE = {
  error: false,
  data: []
}

export default function rootReducer(state = INITIALSTATE, action) {

  switch (action.type) {

    case FAILED_LOAD_CURRENT:
      return ({
        ...state,
        error: action.error,
      })

    // case LOADING_CURRENT_DATA:
    //   return ({...state,
    //            loading: action.loading
    //           })

    case FETCH_STATES_CURRENT:

      return ({
        ...state,
        error: false,
        data: [...action.statesCurrentData]
      });


    default:
      return state;
  }
}