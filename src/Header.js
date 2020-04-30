import React from 'react';
import './Header.css';


function Header(){


  return (
    <>
      <div className="title">
        <h1>United States COVID-19 Pandemic Heat Map</h1>
      </div>
      <div className="sources">
        <h3>This project was made possible by the valuable information provided by <a target='_blank' href='https://www.covidtracking.com'>The COVID Tracking Project</a>.</h3>
        <p>Check out the Github Repo <a target="_blank" href="https://github.com/richarddowdy/covid-tracker">covid-tracker</a>!</p>
      </div>
    </>
  )
}

export default Header;