import axios from 'axios';
import _ from 'lodash';
import {FETCH_STATES_HISTORY, FETCH_STATES_CURRENT} from './types';
import { stateInitials } from '../components/stateInitials';


export function fetchStatesHistoryFromAPI(){
  return async function (dispatch) {
    const response = await axios.get("https://www.covidtracking.com/api/v1/states/daily.json");
    // console.log(response.data);
    const grouped = _.groupBy(response.data, "state")
    // console.log("groudped response ready to be sent",grouped);
    return dispatch(getStatesHistory(grouped));
  }
}

function getStatesHistory(statesHistory){
  // console.log("in actions to be sent",statesHistory)
  return {
    type: FETCH_STATES_HISTORY,
    statesHistory
  }
}

export function fetchStatesCurrentDataAPI(){
  return async function (dispatch){
    const response = await axios.get("https://www.covidtracking.com/api/v1/states/current.json");
    // console.log("in current action", response.data)
    const fifteyStates = response.data.filter((element) => { 
      return stateInitials.includes(element.state)
    }).sort((a,b) => b.positive - a.positive);
    console.log("filtered 50", fifteyStates);
    return dispatch(getCurrentStatesData(fifteyStates));
  }
};

function getCurrentStatesData(statesCurrentData){
  return {
    type: FETCH_STATES_CURRENT,
    statesCurrentData
  }
}