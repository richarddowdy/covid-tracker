import React from 'react';
import { Link } from 'react-router-dom';
import { stateLabels } from '../javascript/stateLabels'

function StateRow ({ stateData, idx }) {
  
  return (
    <tr>
      <td className='border'>{`${idx+1}`}</td>
      <td className='border'><Link to={`states/${stateData.state}`}>{`${stateLabels[stateData.state]}`} </Link></td>
      <td className='border'>{`${stateData.positive}`}</td>
      <td className='border'>{`${stateData.recovered || "No Data"}`}</td>
      <td className='border'>{`${stateData.death || "No Data"}`}</td>
    </tr>
  )
}

export default StateRow;