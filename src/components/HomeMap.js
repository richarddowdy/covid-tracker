import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { useSelector, useDispatch } from "react-redux";
import { fetchGeoDataAPI } from "../actions/geoData";
import Header from "./Header";
import MapChart from "./MapChart";

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