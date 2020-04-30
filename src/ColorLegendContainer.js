import React from 'react';
import ColorIndicator from './ColorIndicator';

function ColorLegendContainer(){

  const colorCodes = ['#FFD700',
                      '#FF8C00',
                      '#FF4500',
                      '#FF0000',
                      '#CC0000',
                      '#8B0000'
                     ]

  const ranges = ["999 or Less",
                  "1,000 - 4,999",
                  "5,000 - 9,999",
                  "10,000 - 49,999",
                  "50,000 - 99,999",
                  "Over 100,000",
                 ]

  return (
    <div>
      <h2 className="font-weight-bold">Key</h2>
      {colorCodes.map((color,idx) => {
        return <ColorIndicator key={idx} color={colorCodes[idx]} range={ranges[idx]}/>
      })}
    </div>
  )
}


export default ColorLegendContainer;