import React, { useState } from "react";
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

  const [currentLocation, setCurrentLocation] = useState(forest)

  // const forest = <Forest islandMap={handleMapView} />
  // const volcano = <Volcano islandMap={handleMapView} />
  const location = <Location currentLocation={currentLocation} onEventSelect={handleEventSelect} />
  const chooseYourLocation = <ChooseYourLocation onLocationSelect={handleLocationSelect} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} />

  


  const [currentPage, setCurrentPage] = useState(chooseYourLocation)


  function handleLocationSelect(e) {
    console.log(e.target.value)
    // setCurrentPage(location)
    // (e.target.value) === "forest" ? setCurrentPage(forest) : setCurrentPage(volcano)
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