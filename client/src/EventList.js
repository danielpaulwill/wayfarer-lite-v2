import React, { useEffect, useState } from "react";
import Event from "./Event";

function EventList({ goToIslandMap, location, onEventSelect }) {
  const [allEvents, setAllEvents] = useState(location.events)
  const [eventsOptions, setEventsOptions] = useState()
  const [selectedEvent, setSelectedEvent] = useState()

  console.log({ allEvents })

  // Save the events to the allEvents State
  useEffect(() => {
    setAllEvents(location.events)
    }, [location])

  // Create a button for each event
  useEffect(() => {
    let allOptions = allEvents.map((event) => (event.is_complete ? console.log("") : 
    <div className="center" key={event.id}>
      <button className="normalButton" value={event.id} onClick={e => onSelectedEvent(event)}>{event.name}</button>
    </div>
  ))
    setEventsOptions(allOptions)
  }, [allEvents])

  // function onSelectedEvent(event) {
  //   // PATCH to no longer show events that have been executed
  //   fetch(`/events/${event.id}`, {
  //     method: 'PATCH',
  //     // mode: 'no-cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       is_complete: true
  //     })})
  //     .then((res) => {
  //       if (res.ok) {
  //         res.json().then((data) => {
  //           let updatedEvents = allEvents.map(event => {
  //             if (event.id === data.id) {
  //               return {...event, is_complete: true}
  //               // console.log("skip")
  //             } else {
  //               return event
  //             }
  //           });
  //           setAllEvents(updatedEvents)
  //         });
  //       } else {
  //         console.log("")
  //       }})
  //   onEventSelect(event)
  // }







  function onSelectedEvent(event) {
    setSelectedEvent(event)
  }

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
              console.log(data)
              let updatedEvents = allEvents.map(event => {
                if (event.id === data.id) {
                  return data
                  // console.log("skip")
                } else {
                  return event
                }
              });
              setAllEvents(updatedEvents)
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