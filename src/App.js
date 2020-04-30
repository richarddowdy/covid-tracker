import React from "react";
// import ReactDOM from "react-dom";


/*
  Not sure where to put the tooltip to prevent constant re-render of entire map component 
  when mouse moves to different states.

  This was original from docs.
*/

// import ReactTooltip from "react-tooltip";

// import "./App.css";

import MapChart from "./MapChart";
import Header from "./Header";

function App() {
  // const [content, setContent] = useState("");
  return (
    <div>
      <Header/>
      <MapChart/>
      {/* <MapChart setTooltipContent={setContent} /> */}
      {/* <ReactTooltip>{content}</ReactTooltip> */}
    </div>
  );
}

export default App;