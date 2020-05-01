import React from 'react';


function Header(){

  return (
    <div className="header pt-5">
      <div className="title">
        <h1>United States COVID-19 Pandemic Heat Map</h1>
      </div>
      <div className="sources m-3">
        <h3>This project was made possible by the valuable information provided by <a className="text-decoration-none text-primary" target='_blank' rel="noopener noreferrer" href='https://www.covidtracking.com'>The COVID Tracking Project</a>.</h3>
        <p className="font-weight-bold"><a className="text-decoration-none text-primary" target="_blank" rel="noopener noreferrer" href="https://github.com/richarddowdy/covid-tracker">Check out the Github Repo covid-tracker!</a></p>
      </div>
    </div>
  )
}

export default Header;