import axios from 'axios';
import _ from 'lodash';
import {FETCH_STATES_HISTORY, FETCH_STATES_CURRENT} from './types';
import { stateInitials } from '../javascript/stateInitials'; // Array of State Initials
import { BASE_URL } from '../javascript/baseUrl';


export function fetchStatesHistoryFromAPI(){
  return async function (dispatch) {
    try{
      const response = await axios.get(`${BASE_URL}states/daily.json`);
      const grouped = _.groupBy(response.data, "state")
      return dispatch(getStatesHistory(grouped)); // TODO set loading to false
    } catch (err) {
      // TODO dispatch action creator with error
    }
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
    try{
      const response = await axios.get(`${BASE_URL}states/current.json`);
      const fifteyStates = response.data.filter((element) => { 
        return stateInitials.includes(element.state)
      }).sort((a,b) => b.positive - a.positive);
      return dispatch(getCurrentStatesData(fifteyStates)); // TODO set loading to false
    } catch (err) {
      // TODO dispatch action creator with error
    }
  }
};

function getCurrentStatesData(statesCurrentData){
  return {
    type: FETCH_STATES_CURRENT,
    statesCurrentData
  }
}