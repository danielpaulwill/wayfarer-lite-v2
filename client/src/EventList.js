import React, { useEffect, useState } from "react";
import Event from "./Event";

function EventList({ goToIslandMap, location, onEventSelect }) {
  const [events, setEvents] = useState([])

  // let location = {
  //   id: 3,
  //   name: "Forest",
  //   description: "A deep green, lush rainforest. It seems inviting, yet you can feel it holds danger.",
  //   is_complete: false,
  //   character_id: 2,
  //   events: [{
  //     id: 9,
  //     location_id: 3,
  //     name: "Event One",
  //     description: "The first Forest event.",
  //     is_complete: false,
  //     created_at: "2022-08-30T04:06:09.886Z","updated_at":"2022-08-30T04:06:09.886Z",
  //     options: [{
  //       id: 1,
  //       event_id: 9,
  //       name: "Option 1",
  //       description: "The first option of the first Forest event.",
  //       is_complete: false,
  //       created_at: "2022-08-30T04:06:11.892Z",
  //       updated_at: "2022-08-30T04:06:11.892Z"
  //     },
  //     {
  //       id: 2,
  //       event_id: 9,
  //       name: "Option 2",
  //       description: "The second option of the first Forest event.",
  //       is_complete: false,
  //       created_at: "2022-08-30T04:06:11.903Z",
  //       updated_at: "2022-08-30T04:06:11.903Z"
  //     }]},
  //     {
  //     id: 10,
  //     location_id: 3,
  //     name: "Event Two",
  //     description: "The second Forest event.",
  //     is_complete: false,
  //     created_at: "2022-08-30T04:06:09.891Z",
  //     updated_at: "2022-08-30T04:06:09.891Z",
  //     options: [{
  //       id: 3,
  //       event_id: 10,
  //       name: "Option 1",
  //       description: "The first option of the second Forest event.",
  //       is_complete: false,
  //       created_at: "2022-08-30T04:06:11.908Z",
  //       updated_at: "2022-08-30T04:06:11.908Z"
  //     },
  //     {
  //       id: 4,
  //       event_id: 10,
  //       name: "Option 2",
  //       description: "The second option of the second Forest event.",
  //       is_complete: false,
  //       created_at: "2022-08-30T04:06:11.913Z",
  //       updated_at: "2022-08-30T04:06:11.913Z"
  //     }]},
  //     {
  //     id: 11,
  //     location_id: 3,
  //     name: "Event Three",
  //     description: "The third Forest event.",
  //     is_complete: false,
  //     created_at: "2022-08-30T04:06:09.895Z",
  //     updated_at: "2022-08-30T04:06:09.895Z",
  //     options: [{
  //       id: 5,
  //       event_id: 11,
  //       name: "Option 1",
  //       description: "The first option of the third Forest event.",
  //       is_complete: false,
  //       created_at: "2022-08-30T04:06:11.918Z",
  //       updated_at: "2022-08-30T04:06:11.918Z"
  //     },
  //     {
  //       id: 6,
  //       event_id: 11,
  //       name: "Option 2",
  //       description: "The second option of the third Forest event.",
  //       is_complete: false,
  //       created_at: "2022-08-30T04:06:11.922Z",
  //       updated_at: "2022-08-30T04:06:11.922Z"
  //     }]},
  //     {
  //     id: 12,
  //     location_id: 3,
  //     name: "Event Four",
  //     description: "The fourth Forest event.",
  //     is_complete: false,
  //     created_at: "2022-08-30T04:06:09.898Z",
  //     updated_at: "2022-08-30T04:06:09.898Z",
  //     options: [{
  //       id: 7,
  //       event_id: 12,
  //       name: "Option 1",
  //       description: "The first option of the fourth Forest event.",
  //       is_complete: false,
  //       created_at: "2022-08-30T04:06:11.926Z",
  //       updated_at: "2022-08-30T04:06:11.926Z"
  //     },
  //     {
  //       id: 8,
  //       event_id: 12,
  //       name: "Option 2",
  //       description: "The second option of the fourth Forest event.",
  //       is_complete: false,
  //       created_at: "2022-08-30T04:06:11.930Z",
  //       updated_at: "2022-08-30T04:06:11.930Z"
  //     }]}]}




    // console.log({ events })
  // useEffect(() => {
    // setEvents(location.events)
  // }, [location])

  console.log({ location })
  let eventsOptions = location.events.map((event) => 
  <div className="center" key={event.id}>
    <button className="normalButton" value={event.id} onClick={e => onEventSelect(event)}>{event.name}</button>
  </div>
)

        
 
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