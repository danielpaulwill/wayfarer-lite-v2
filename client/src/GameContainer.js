import React, { useEffect, useState } from "react";
import CharacterSidebar from "./CharacterSidebar";
import ItemsSidebar from "./ItemsSidebar";
import ChooseYourLocation from "./ChooseYourLocation";
import Location from "./Location";

function GameContainer({ user, characterName, characterAvatar, archerAvatar, mageAvatar, warriorAvatar }) {
  
  const [currentLocation, setCurrentLocation] = useState('')

  const location = <Location currentLocation={currentLocation} onEventSelect={handleEventSelect} />
  const chooseYourLocation = <ChooseYourLocation onLocationSelect={handleLocationSelect} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} />

  const [selectedLocation, setSelectedLocation] = useState('')
  const [receivedLocation, setReceivedLocation] = useState('')

  const [currentPage, setCurrentPage] = useState(chooseYourLocation)


  console.log(receivedLocation)

  useEffect(() => {
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
          res.json().then((data) => setReceivedLocation(data));
          window.scrollTo(0, 0);
        } else {
          console.log("Location failed")
          // res.json().then((err) => setErrors(err.errors))
        }})
  }, [selectedLocation])

  function handleLocationSelect(e) {
    setSelectedLocation(e.target.value)
    // setCurrentPage(location)
  }

  function handleEventSelect(event) {
    setCurrentLocation(event)
  }
  
  return (
    <div className="gameArea">
      {currentPage}
    </div>
  )
};

export default GameContainer;