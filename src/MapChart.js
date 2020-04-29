import React, { memo, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { geoCentroid } from "d3-geo";
import "./MapChart.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";

// Loads data needed for the map
import allStates from "./allstates.json";
import fetchData from "./covidAPI"; // custom function to get covid data and load it into map data

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};

const MapChart = () => {
  console.log("rendered"); // renders when mouse moves to new state

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
      {loadComplete ? (
        <>
          <ReactTooltip>{content}</ReactTooltip>
          <ComposableMap className="map" data-tip="" projection="geoAlbersUsa">
            <Geographies geography={mapData}>
              {({ geographies }) => (
                <>
                  {geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      stroke="#FFF"
                      geography={geo}
                      fill="#DDD"
                      onMouseEnter={() => {
                        //  console.log(geo.properties);
                        const { name, cases, recovered } = geo.properties;
                        //This would allow me to show Cases inside the popup bubble
                        //as long as i pull cases from properties above.^
                        setContent(
                          `${name} => Cases: ${cases}\n Recovered: ${recovered}`
                        );
                        // setTooltipContent(`${name}`);
                      }}
                      onMouseLeave={() => {
                        setContent("");
                      }}
                      style={{
                        default: {
                          fill: "#D6D6DA",
                          outline: "",
                        },
                        // hover: {
                        //   fill: "#F53",
                        //   outline: "none"
                        // },
                        // pressed: {
                        //   fill: "#E42",
                        //   outline: "none"
                        // }
                      }}
                    />
                  ))}
                  {geographies.map((geo) => {
                    const centroid = geoCentroid(geo);
                    const cur = allStates.find((s) => s.val === geo.id);
                    return (
                      <g key={geo.rsmKey + "-name"}>
                        {cur &&
                          centroid[0] > -160 &&
                          centroid[0] < -67 &&
                          (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                            <Marker coordinates={centroid}>
                              <text y="2" fontSize={14} textAnchor="middle">
                                {cur.id}
                              </text>
                            </Marker>
                          ) : (
                            <Annotation
                              subject={centroid}
                              dx={offsets[cur.id][0]}
                              dy={offsets[cur.id][1]}
                            >
                              <text
                                x={4}
                                fontSize={14}
                                alignmentBaseline="middle"
                              >
                                {cur.id}
                              </text>
                            </Annotation>
                          ))}
                      </g>
                    );
                  })}
                </>
              )}
            </Geographies>
          </ComposableMap>
        </>
      ) : (
        <p>LOADING....</p>
      )}
    </>
  );
};

export default memo(MapChart);
