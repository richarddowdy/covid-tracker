import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Header from "./Header";
import MapChart from "./MapChart";

import { useSelector, useDispatch } from "react-redux";
import { fetchGeoDataAPI } from "../actions/geoData";


import fetchData from "../actions/covidAPI"; // custom function to get covid data and load it into map data


function HomeMap() {

  const dispatch = useDispatch();
  const mapData = useSelector((st) => st.mapData);

  // content of the tooltip
  const [content, setContent] = useState("");


  useEffect(() => {
    async function getMapData(){
      dispatch(fetchGeoDataAPI());
    }
    if(!mapData.type){
      getMapData();
    }
  },[mapData, dispatch])


  return (
    <>
      <Header />    
      {mapData.type ? 
        <>
          <MapChart setContent={setContent} mapData={mapData}/>
          <ReactTooltip>{content}</ReactTooltip>
        </>
       : 
        <p>Loading...</p>
      }
    </>
  );
}

export default HomeMap;