import React, { useEffect, useState } from "react";
import ChooseYourLocation from "./ChooseYourLocation";
import EventList from "./EventList";

function GameContainer({ user, characterName, characterAvatar, archerAvatar, mageAvatar, warriorAvatar }) {
  
  const [location, setLocation] = useState('')

  const eventList = <EventList location={location} onEventSelect={handleEventSelect} goToIslandMap={goToIslandMap} />
  const chooseYourLocation = <ChooseYourLocation onLocationSelect={handleLocationSelect} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} />

  const [selectedLocation, setSelectedLocation] = useState('')

  const [currentPage, setCurrentPage] = useState(chooseYourLocation)

  function handleLocationSelect(e) {
    setSelectedLocation(e.target.value)
    handleLocationFetch()
  }

  function handleLocationFetch() {
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
          setTimeout(function(){
            handleEventPage()
          }, 500);
          window.scrollTo(0, 0);
        } else {
          console.log("Location failed")
          // res.json().then((err) => setErrors(err.errors))
        }})
  }

  function handleEventPage() {
    setCurrentPage(eventList)
  }

  function handleEventSelect(event) {
    setLocation(event)
  }

  function goToIslandMap() {
    setCurrentPage(chooseYourLocation)
  }
  
  return (
    <div className="gameArea">
      {currentPage}
    </div>
  )
};

export default GameContainer;