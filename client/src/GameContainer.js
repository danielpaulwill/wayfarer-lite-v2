import React, { useEffect, useState } from "react";
import ChooseYourLocation from "./ChooseYourLocation";
import EventList from "./EventList";
import LoadingPage from "./LoadingPage";
import Event from "./Event";
import OptionResult from "./OptionResult";

function GameContainer({ user, characterName, characterAvatar, archerAvatar, mageAvatar, warriorAvatar }) {
  
  const [location, setLocation] = useState()
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedEvent, setSelectedEvent] = useState()

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

  const eventList = <EventList location={location} onEventSelect={handleEventSelect} goToIslandMap={goToIslandMap}/>
  const chooseYourLocation = <ChooseYourLocation onLocationSelect={handleLocationSelect} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} />
  const loadingPage = <LoadingPage location={location} locationWorkaround={locationWorkaround} />

  const [currentPage, setCurrentPage] = useState(chooseYourLocation)

  function handleLocationSelect(e) {
    setSelectedLocation(e.target.value)
  }

  useEffect(() => {
    if (selectedLocation) {
      fetch('/locations-select', {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: selectedLocation,
        })})
        .then((res) => {
          if (res.ok) {
            res.json().then((data) => setLocation(data));
           } else {
            console.log("Location failed")
          }
        })
    } else {
      console.log("")
        }
        }, [selectedLocation])

  useEffect(() => {
    location ? setCurrentPage(eventList) : console.log('')
  }, [location])
        
  function locationWorkaround() {
    const eventList = <EventList location={location} onEventSelect={handleEventSelect} goToIslandMap={goToIslandMap}/>
    setCurrentPage(eventList)
  }

  function handleEventSelect(event) {
    const eventPage = <Event event={event} onOptionSelect={handleOptionSelect} />
    setCurrentPage(eventPage)
  }

  function goToIslandMap() {
    setCurrentPage(chooseYourLocation)
  }

  function handleOptionSelect(option) {
    const optionResult = <OptionResult option={option} locationWorkaround={locationWorkaround} />
    setCurrentPage(optionResult)
  }
  
  return (
    <div className="gameArea">
      {currentPage}
    </div>
  )
};

export default GameContainer;