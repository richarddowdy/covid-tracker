import React, {useState} from "react";
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
  // console.log(content);

  return (
    <div className="container-fluid bg-light">
      <Header/>
      <MapChart />

    </div>
  );
}

export default App;