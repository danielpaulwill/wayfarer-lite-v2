import React from "react";

function Forest({ islandMap }) {

 
  return (
    <div className="gameArea">
      <div className="center">
        <button className="normalButton" onClick={islandMap}>Island Map</button>
      </div>
      <h1>Forest</h1>
      <div>

      </div>
    </div>
  )
};

export default Forest;