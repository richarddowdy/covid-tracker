import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchStatesCurrentDataAPI } from "../actions/states";
import StateCard from "./StateCard";

function StateList() {
  const dispatch = useDispatch();

  const stateList = useSelector((st) => st.statesCurrent);

  useEffect(() => {
    async function getCurrentData() {
      dispatch(fetchStatesCurrentDataAPI());
    }
    if (!stateList || stateList.length === 0) {
      getCurrentData();
    }
  }, [stateList, dispatch]);

  return (
    <>
      <h1 className="font-weight-bold m-5">States in Order of Most Cases</h1>
      <div className="row justify-content-center">
        {stateList ? (
          <>
            {stateList.map((state) => {
              return <StateCard key={state.state} stateData={state} />;
            })}
          </>
        ) : (
          <h1>LOADING</h1>
        )}
      </div>
    </>
  );
}

export default StateList;
