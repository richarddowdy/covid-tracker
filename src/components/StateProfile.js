import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatesHistoryFromAPI } from "../actions/states";
import { AreaChart, XAxis, YAxis, Tooltip, Area, ResponsiveContainer, Legend } from 'recharts';
import {chartDataHelper} from '../javascript/chartData'
import { stateLabels } from '../javascript/stateLabels';
import './StateProfile.css'

function StateProfile() {
  const dispatch = useDispatch();
  const { state } = useParams();

  const currentState = useSelector((st) => st.statesHistory[state]);

  useEffect(() => {
    async function getStateData() {
      dispatch(fetchStatesHistoryFromAPI());// TODO should set loading to true
    }
    if (!currentState) {
      getStateData();
    }
  }, [currentState, state, dispatch]);
  
 
  return (
    <> 
      {currentState ? ( // TODO component should depend on loading from state instead of this
        <>
          <h1 className="mt-5">{stateLabels[currentState[0].state]}</h1>
          <p className="axis-label" >Number of Cases</p>
          <div style={{ margin: "50px auto", textAlign: "center", width: "80%", height:"300px"}}>
            <ResponsiveContainer>
              <AreaChart width={700} height={300} data={chartDataHelper(currentState)} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <XAxis stroke="black" dataKey="humanDate" />
                <YAxis stroke="black" style={{fontSize: "14px"}}/>
                <Area type="monotone" dataKey="Cases" stackId="1" stroke="#FF0000" fill="#FF0000" />
                <Area type="monotone" dataKey="Recovered" stackId="2" stroke="blue" fill="blue" />
                <Area type="monotone" dataKey="Deaths" stackId="3" stroke="black" fill="black" />
                <Tooltip/>
                <Legend iconSize={30} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <h2>Progression of COVID-19 Infections in 2020</h2>
        </>
      ) : (
        <h1>LOADING STATE DATA</h1>
      )}
    </>
  );
}

export default StateProfile;
