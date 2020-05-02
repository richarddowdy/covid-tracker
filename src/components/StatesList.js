import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {fetchStatesCurrentDataAPI} from '../actions/states';


function StateList(){
  
  const dispatch = useDispatch();

  const stateList = useSelector((st) => st.statesCurrent)

  useEffect(() => {
    async function getCurrentData(){
      dispatch(fetchStatesCurrentDataAPI());
    }
    if(!stateList || stateList.length === 0){
      getCurrentData();
    }
  }, [stateList, dispatch]);

  
  return (
    <>
      {stateList ?
        <>
          {stateList.map(state => {
            return(
            <div key={state.state}>
              <p>{`State: ${state.state}  Cases:${state.positive}  Recovered:${state.recovered || null}`}</p>
            </div>)
          })}
        </>
        // <StateCard stateData={stateData}/>
      :
        <h1>LOADING</h1>
      }
    </>
  )

}

export default StateList;