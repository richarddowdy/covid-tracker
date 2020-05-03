import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import ColorLegendContainer from "./ColorLegendContainer";
import { geoCentroid } from "d3-geo";
import { scaleThreshold } from "d3-scale";
import "./MapChart.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";

// Loads data needed for the map
import allStates from "../allstates.json";

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

const MapChart = ({ setContent, mapData }) => {

  /**
   * d3 methods stringed together
   * returns color for highest threshold met
   * cases < 999 => 'FFD700' - lighter
   * 1000-4999 => 'FF8C00'
   * 5000-9999 => 'FF4500'
   * 10000-49999 => 'FF0000'
   * 50000-99999 => 'CC0000'
   * 100000 < cases => '8B0000' - darker
   */

  // normal view
  const colorScale = scaleThreshold()
    .domain([1000, 5000, 10000, 50000, 100000]) // threshold limits
    .range(["FFD700", "#FF8C00", "#FF4500", "#FF0000", "#CC0000", "#8B0000"]); // color(strings) returned for threshold met
  // colors onHover
  const colorScaleHover = scaleThreshold() // controls background color of states on hover
    .domain([1000, 5000, 10000, 50000, 100000]) // threshold limits
    .range(["#ffe44d", "#ffaf4d", "#ff7c4d", "#ff4d4d", "#e60000", "#b30000"]); // color(strings) returned for threshold met

  // Acts as link
  const history = useHistory();
  const handleClick = (state) => {
    history.push(`/states/${state}`);
  };

  return (
    <>
      <div className="row align-items-center">
        <div className="col-10">
          <ComposableMap className="map" data-tip="" projection="geoAlbersUsa">
            <Geographies geography={mapData}>
              {({ geographies }) => (
                <>
                  {geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      stroke="#FFF"
                      geography={geo}
                      fill={colorScaleHover(geo.properties.cases)}
                      onClick={() => handleClick(geo.properties.abbreviation)}
                      onMouseEnter={() => {
                        const {
                          name,
                          cases,
                          recovered,
                          deaths,
                        } = geo.properties;
                        setContent(
                          `${name} Cases: ${cases} Recovered: ${recovered} Deaths: ${deaths}` // not sure why new line not working??
                        );
                      }}
                      onMouseLeave={() => {
                        setContent("");
                      }}
                      style={{
                        default: {
                          fill: colorScale(geo.properties.cases),
                          outline: "",
                        },
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
                              <text
                                pointerEvents="none"
                                y="2"
                                fontSize={16}
                                textAnchor="middle"
                              >
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
        </div>
        <ColorLegendContainer />
      </div>
    </>
  );
};

export default memo(MapChart);
