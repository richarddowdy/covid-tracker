import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStatesCurrentDataAPI } from "../actions/states";
import StateRow from "./StateRow";
import "./StateList.css";

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
    <div className="pt-5 pb-5">
      <table className="m-auto text-align-center">
        <thead>
          <tr>
            <th className="p-3 font-weight-bold border-bottom">#</th>
            <th className="p-3 font-weight-bold border-bottom">State</th>
            <th className="p-3 font-weight-bold border-bottom">Cases</th>
            <th className="p-3 font-weight-bold border-bottom">Recovered</th>
            <th className="p-3 font-weight-bold border-bottom">Deaths</th>
          </tr>
        </thead>
        <tbody>
          {stateList.map((state, idx) => {
            return <StateRow key={state.state} stateData={state} idx={idx} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StateList;
