import { 
  FETCH_GEODATA 
} from '../actions/types';

export default function rootReducer (state = {}, action){

  switch(action.type) {
    
    case FETCH_GEODATA:
    /**
     * return {...state,
     *         loading: false?,
     *         error: false?,
     *         data: {...action.data}
     *    }
     */
      return {...action.mapData}

    default:
      return state;
  }
}