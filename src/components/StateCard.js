import React from 'react';
import { Link } from 'react-router-dom';

import { stateLabels } from '../javascript/stateLabels'

function StateCard({ stateData }){
  return (
    <div className="card d-flex col-3 m-3" >
      <div className="card-body">
        <h5 className="card-title text-weight-bold">{stateLabels[stateData.state]}</h5>
        <p className="card-text">{`Cases: ${stateData.positive}`}</p>
        <p className="card-text">{`Recovered: ${stateData.recovered || "No Data"}`}</p>
        <p className="card-text">{`Deaths: ${stateData.deaths || "No Data"}`}</p>
        <Link to={`states/${stateData.state}`} className="btn btn-primary">More</Link>
      </div>
    </div>
  )
}

export default StateCard;