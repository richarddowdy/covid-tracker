import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchStatesHistoryFromAPI } from "../actions/states";

function StateProfile() {
  const dispatch = useDispatch();
  const { state } = useParams();

  const currentState = useSelector((st) => st.statesHistory[state]);

  useEffect(() => {
    async function getStateData() {
      dispatch(fetchStatesHistoryFromAPI());
    }
    if (!currentState) {
      getStateData();
    }
  }, [currentState, state, dispatch]);

  return (
    <>
      {currentState ? (
        <>
          <h1>State Data for: {currentState[0].state}</h1>
          <div>
            {currentState.map((day) => {
              return (
                <div key={day.date}>
                  <p>
                    Total cases for {day.date}: {day.positive}
                  </p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        // <div>
        //   <h1>{`${state} Profile Coming Soon!`}</h1>
        //   <h1>Current Cases: {cases}</h1>
        //   <h1>Recovered Cases: {recovered}</h1>
        //   <h1>Deaths: {deaths}</h1>
        //   <h1>Increase since yesterday: {}</h1>
        // </div>
        <h1>LOADING STATE DATA</h1>
      )}
    </>
  );
}

export default StateProfile;
