import React, { useEffect, useState } from "react";
import Event from "./Event";

function EventList({ goToIslandMap, location, onEventSelect }) {

  useEffect(() => {
    console.log({ location })
  }, [location])


  let eventsOptions = location.events.map((event) => 
  <div className="center" key={event.id}>
    <button className="normalButton" onClick={e => onEventSelect(event)}>{event.name}</button>
  </div>
)

        
 
  return (
    <div>
      <div className="center">
        <button className="normalButton" onClick={goToIslandMap}>Island Map</button>
      </div>
      <div>
        <h1>{location.name}</h1>
        <p>{location.description}</p>
        <br></br>
        {eventsOptions}
      </div>
    </div>
  )
};

export default EventList;