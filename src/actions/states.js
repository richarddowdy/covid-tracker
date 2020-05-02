import axios from 'axios';
import _ from 'lodash';
import {FETCH_STATES_HISTORY, FETCH_STATES_CURRENT} from './types';
import { stateInitials } from '../components/stateInitials';


export function fetchStatesHistoryFromAPI(){
  return async function (dispatch) {
    const response = await axios.get("https://www.covidtracking.com/api/v1/states/daily.json");
    const grouped = _.groupBy(response.data, "state")
    return dispatch(getStatesHistory(grouped));
  }
}

function getStatesHistory(statesHistory){
  return {
    type: FETCH_STATES_HISTORY,
    statesHistory
  }
}

export function fetchStatesCurrentDataAPI(){
  return async function (dispatch){
    const response = await axios.get("https://www.covidtracking.com/api/v1/states/current.json");
    const fifteyStates = response.data.filter((element) => { 
      return stateInitials.includes(element.state)
    }).sort((a,b) => b.positive - a.positive);
    return dispatch(getCurrentStatesData(fifteyStates));
  }
};

function getCurrentStatesData(statesCurrentData){
  return {
    type: FETCH_STATES_CURRENT,
    statesCurrentData
  }
}