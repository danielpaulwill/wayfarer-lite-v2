import React, { useEffect, useState, useRef } from "react";
import Event from "./Event";

function EventList({ goToIslandMap, location, onEventSelect }) {
  // const [allEvents, setAllEvents] = useState(location.events)
  const [eventsOptions, setEventsOptions] = useState()
  const [selectedEvent, setSelectedEvent] = useState()

  const allEvents = useRef(location.events)

  // console.log("allEvents: ",allEvents.current)

  // Save the events to the allEvents State
  // useEffect(() => {
  //   setAllEvents(location.events)
  //   }, [location])

  // Create a button for each event
  useEffect(() => {
    let allOptions = allEvents.current.map((event) => (event.is_complete ? console.log("") : 
    <div className="center" key={event.id}>
      <button className="normalButton" value={event.id} onClick={e => setSelectedEvent(event)}>{event.name}</button>
    </div>
  ))
    setEventsOptions(allOptions)
  }, [allEvents])

  useEffect(() => {
    if (selectedEvent) {
      fetch(`/events/${selectedEvent.id}`, {
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
              let updatedEvents = allEvents.current.map(event => {
                if (event.id === data.id) {
                  return data
                  // console.log("skip")
                } else {
                  return event
                }
              });
              allEvents.current = updatedEvents
            });
          } else {
            console.log("")
          }})
      onEventSelect(selectedEvent)
    }
        }, [selectedEvent])

  // Render EventList page with the correct location
  // useEffect(() => {
  //   allEvents ? setCurrentPage(eventList) : console.log('')
  // }, [allEvents])



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