import React from "react";
import ColorIndicator from "./ColorIndicator";

function ColorLegendContainer() {
  const colorCodes = ["#FFD700", "#FF8C00", "#FF4500", "#FF0000", "#CC0000", "#8B0000"];

  const ranges = ["50K or Less", "50k - 200k", "200k - 500k", "500k - 1M", "1M - 2M", "Over 2 Million"];

  return (
    <div>
      <h2 className="font-weight-bold">Key</h2>
      {colorCodes.map((color, idx) => {
        return <ColorIndicator key={idx} color={colorCodes[idx]} range={ranges[idx]} />;
      })}
    </div>
  );
}

export default ColorLegendContainer;
