import React, { useEffect, useState } from "react";
import CharacterSidebar from "./CharacterSidebar";
import ItemsSidebar from "./ItemsSidebar";
import ChooseYourLocation from "./ChooseYourLocation";
import Location from "./Location";

function GameContainer({ user, characterName, characterAvatar, archerAvatar, mageAvatar, warriorAvatar }) {
  
  let forest = {
    name: "Forest",
    description: "A dense rainforest",
    is_complete: false
  }

  const [currentLocation, setCurrentLocation] = useState('')

  // const forest = <Forest islandMap={handleMapView} />
  // const volcano = <Volcano islandMap={handleMapView} />
  const location = <Location currentLocation={currentLocation} onEventSelect={handleEventSelect} />
  const chooseYourLocation = <ChooseYourLocation onLocationSelect={handleLocationSelect} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} />

  const [selectedLocation, setSelectedLocation] = useState('')


  const [currentPage, setCurrentPage] = useState(chooseYourLocation)

  useEffect(() => {
    fetch(`/locations/${selectedLocation}`)
      .then(res => res.json())
      .then((data) => console.log(data));
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