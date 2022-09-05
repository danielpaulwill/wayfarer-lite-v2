import React, { useEffect, useState } from "react";
import ChooseYourLocation from "./ChooseYourLocation";
import EventList from "./EventList";
import LoadingPage from "./LoadingPage";
import Event from "./Event";
import OptionResult from "./OptionResult";

function GameContainer({ user, characterName, characterAvatar, archerAvatar, mageAvatar, warriorAvatar }) {
  
  const [location, setLocation] = useState()
  const [selectedLocation, setSelectedLocation] = useState('')

  const eventList = <EventList location={location} onEventSelect={handleEventSelect} goToIslandMap={goToIslandMap} />
  const chooseYourLocation = <ChooseYourLocation onLocationSelect={handleLocationSelect} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} />
  // const loadingPage = <LoadingPage location={location} locationWorkaround={locationWorkaround} />

  const [currentPage, setCurrentPage] = useState(chooseYourLocation)

  function handleLocationSelect(e) {
    // setSelectedLocation(e.target.value)
    fetch('/locations-select', {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.value,
      })})
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => setLocation(data));
         } else {
          console.log("Location failed")
        }
      })
  }

  // useEffect(() => {
    // console.log("Before")
    // if (selectedLocation) {
      // console.log("After")
      // fetch('/locations-select', {
      //   method: 'POST',
      //   // mode: 'no-cors',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     name: selectedLocation,
      //   })})
      //   .then((res) => {
      //     if (res.ok) {
      //       res.json().then((data) => setLocation(data));
      //      } else {
      //       console.log("Location failed")
      //     }
      //   })
    // } else {
    //   console.log("")
    //     }
        // }, [selectedLocation])

  // Render EventList page with the correct location
  useEffect(() => {
    location ? setCurrentPage(eventList) : console.log('')
  }, [location])
        
  function locationWorkaround() {
    const eventList = <EventList location={location} onEventSelect={handleEventSelect} goToIslandMap={goToIslandMap} />
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