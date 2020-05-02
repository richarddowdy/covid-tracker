import React from "react";
import {useParams} from "react-router-dom";

function StateProfile(){
  const { state } = useParams();

  return (
    <h1>{`${state} Profile Coming Soon!`}</h1>
  )
}

export default StateProfile;