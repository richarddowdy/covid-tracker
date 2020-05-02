import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Header from "./Header";
import MapChart from "./MapChart";

import fetchData from "./covidAPI"; // custom function to get covid data and load it into map data


function HomeMap() {

  const [loadComplete, setLoadComplete] = useState(false);
  const [mapData, setMapData] = useState({});

  // content of the tooltip
  const [content, setContent] = useState("");

  //custom function to get map data with covid data
  async function getData() {
    const covidMapData = await fetchData();
    setMapData(covidMapData);
    setLoadComplete(true);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      {loadComplete ? 
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