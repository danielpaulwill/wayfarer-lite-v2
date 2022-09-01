import React, { useEffect, useState } from "react";
import Event from "./Event";

function EventList({ goToIslandMap, location, onEventSelect }) {
  const [allEvents, setAllEvents] = useState(location.events)

  let eventsOptions;

  // Save the events to the allEvents State
  useEffect(() => {
    setAllEvents(location.events)
    }, [])

  // Create a button for each event
  useEffect(() => {
    eventsOptions = allEvents.map((event) => (event.is_complete ? console.log("skip") : 
    <div className="center" key={event.id}>
      <button className="normalButton" value={event.id} onClick={e => onEventSelect(event)}>{event.name}</button>
    </div>
  ))
  }, [allEvents])


// PATCH to no longer show events that have been executed
  function needToNameThisFunction(event) {
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
          res.json().then((data) => {
            let updatedEvents = allEvents.map(event => data.find(eve => eve.id === event.id) || event);
            setAllEvents(updatedEvents)
          });
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