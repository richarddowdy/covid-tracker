import React, { useState, useEffect } from "react";
import axios from "axios";
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
    async function getMapData() {
      dispatch(fetchGeoDataAPI()); // TODO should set loading to true
    }
    if (!mapData.type) {
      // TODO change this to depend on success???
      getMapData();
    }
  }, [mapData, dispatch]);

  return (
    <>
      <Header />
      {mapData.type /** TODO component should depend on loading from state instead of this */ ? (
        <>
          <MapChart setContent={setContent} mapData={mapData} />
          <ReactTooltip>{content}</ReactTooltip>
        </>
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </>
  );
}

export default HomeMap;
