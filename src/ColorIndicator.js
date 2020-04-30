import React from "react";
import "./ColorIndicator.css";

function ColorIndicator( { range, color }){

  return (
    <div className="mb-3">
      <div className="color-box m-auto" style={{backgroundColor: color}}></div>
      <p className="mt-1 font-weight-bold">{range}</p>
    </div>
  )
}

export default ColorIndicator;