import axios from 'axios';
import _ from 'lodash';
import {FETCH_STATES_HISTORY, FETCH_STATES_CURRENT, FAILED_LOAD_CURRENT, FAILED_LOAD_HISTORY } from './types';
import { stateInitials } from '../javascript/stateInitials'; // Array of State Initials
import { BASE_URL } from '../javascript/baseUrl';


export function fetchStatesHistoryFromAPI(){
  return async function (dispatch) {
    try{
      const response = await axios.get(`${BASE_URL}states/daily.json`);
      const grouped = _.groupBy(response.data, "state")
      return dispatch(getStatesHistory(grouped)); 
    } catch (err) {
      dispatch(failedStatesHistory(err));
    }
  }
}

function getStatesHistory(statesHistory){
  return {
    type: FETCH_STATES_HISTORY,
    statesHistory
  }
}

function failedStatesHistory(error){
  return {
    type: FAILED_LOAD_HISTORY,
    error
  }
}


export function fetchStatesCurrentDataAPI(){
  return async function (dispatch){
    try{
      const response = await axios.get(`${BASE_URL}states/current.json`);
      const fifteyStates = response.data.filter((element) => { 
        return stateInitials.includes(element.state)
      }).sort((a,b) => b.positive - a.positive);
      return dispatch(getCurrentStatesData(fifteyStates)); 
    } catch (err) {
      return dispatch(failedCurrentState(err));
    }
  }
};

function getCurrentStatesData(statesCurrentData){
  return {
    type: FETCH_STATES_CURRENT,
    statesCurrentData
  }
}

function failedCurrentState(error){
  return {
    type: FAILED_LOAD_CURRENT,
    error
  }
}