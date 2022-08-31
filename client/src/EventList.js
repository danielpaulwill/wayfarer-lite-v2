import React, { useEffect, useState } from "react";
import Event from "./Event";

function EventList({ goToIslandMap, location, onEventSelect }) {
  const [events, setEvents] = useState(location.events)


    // console.log({ events })
  // useEffect(() => {
    // setEvents(location.events)
  // }, [location])

  let eventsOptions = events.map((event) => (event.is_complete ? console.log("skip") : 
  <div className="center" key={event.id}>
    <button className="normalButton" value={event.id} onClick={e => onEventSelect(event)}>{event.name}</button>
  </div>
))

  function xxx(event) {

    fetch('/events', {
      method: 'PATCH',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        is_complete: true
      })})
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => setEvents(data));

        } else {
          console.log("")
        }})
    onEventSelect(event)
  }
        
 
  return (
    <div>
      <div className="center">
        <button className="normalButton" onClick={goToIslandMap}>Back to Island Map</button>
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