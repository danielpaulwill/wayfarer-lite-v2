import React, { useEffect, useState } from "react";
import Event from "./Event";

function Location({ islandMap, currentLocation, onEventSelect }) {

  useEffect(() => {
    console.log("useEffect complete")
  }, [])

  const events = [
    {
        id: 1,
        name: "Event One",
        description: "The first Event",
        is_complete: false,
        options: [{
          name: "Option One",
          description: "The first option of the first event",
          is_complete: false
          },
          {
            name: "Option Two",
            description: "The second option of the first event",
            is_complete: false
          }
        ]
        },
        {
          id: 2,
          name: "Event Two",
          description: "The Second Event",
          is_complete: false,
          options: [{
            name: "Option One",
            description: "The first option of the second event",
            is_complete: false
            },
            {
              name: "Option Two",
              description: "The second option of the second event",
              is_complete: false
            }
          ]
          }
      ]

  let eventsOptions = events.map((event) => 
  <div className="center">
    <button className="normalButton" onClick={e => onEventSelect(event)}>{event.name}</button>
  </div>
)

        
 
  return (
    <div className="gameArea">
      <div className="center">
        <button className="normalButton" onClick={islandMap}>Island Map</button>
      </div>
      <div>
        <h1>{currentLocation.name}</h1>
        <p>{currentLocation.description}</p>
        <br></br>
        {eventsOptions}
      </div>
    </div>
  )
};

export default Location;