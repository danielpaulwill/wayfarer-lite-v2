import React, { useState } from "react";
import CharacterSidebar from "./CharacterSidebar";
import ItemsSidebar from "./ItemsSidebar";
import GameStart from "./GameStart";
import ChooseYourCharacter from "./ChooseYourCharacter";
import ConfirmGameBegin from "./ConfirmGameBegin";
import ChooseYourLocation from "./ChooseYourLocation";
import Location from "./Location";

function GameContainer({ user, characterName, characterAvatar }) {
  
  let forest = {
    name: "Forest",
    description: "A dense rainforest",
    is_complete: false
  }

  const [currentLocation, setCurrentLocation] = useState(forest)

  // const forest = <Forest islandMap={handleMapView} />
  // const volcano = <Volcano islandMap={handleMapView} />
  const location = <Location currentLocation={currentLocation} onEventSelect={handleEventSelect} />
  const chooseYourLocation = <ChooseYourLocation onLocationSelect={handleLocationSelect} />

  


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
    <div id="gameContainer">
      <CharacterSidebar avatar={characterAvatar} name={characterName}/>
      {currentPage}
      <ItemsSidebar />
    </div>
  )
};

export default GameContainer;