import {
  FETCH_STATES_CURRENT, LOADING_CURRENT_DATA, FAILED_LOAD_CURRENT
} from "../actions/types";

export default function rootReducer (state = {}, action){

  switch(action.type) {

    case FAILED_LOAD_CURRENT:
      return ( {...state,
              error: action.error,
            } )

    case LOADING_CURRENT_DATA:
      return ({...state,
               loading: action.loading
              })

    case FETCH_STATES_CURRENT:
      console.log(action)
      return ( {...state,
              loading: false,
              error: false,
              data: [...action.statesCurrentData]
            });
       
      // return ( [...action.statesCurrentData] );

    default:
      return state;
  }
}