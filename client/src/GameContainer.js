import React, { useState } from "react";
import CharacterSidebar from "./CharacterSidebar";
import ItemsSidebar from "./ItemsSidebar";
import GameStart from "./GameStart";
import ChooseYourCharacter from "./ChooseYourCharacter";
import ConfirmGameBegin from "./ConfirmGameBegin";
import ChooseYourLocation from "./ChooseYourLocation";
import Location from "./Location";

function GameContainer({ user, characterName, characterAvatar }) {
  const blankAvatar = "https://lh3.googleusercontent.com/5sU9jT3rtB3zLjJppnT50Inb5cylBJA933lPDE4119lC9uToYigbSAtC8ynG-jUf0Tmyn7Y3Qn31brMhZ-S9eyhYU4KdUsFYHhClWOowCVtVP-G02ZqWKZZCzM7wJdfgxqvartNW18QJc6CsZZ2LWiGe4oo4mB_rGRnUQs2vRJaWZihhiR0vgXfKXU3AOhiaLo3Ln1QOp2lUWnv28svd_1G-ZfG4Wn6Z0CidnmSIenWdWY-WZQq7uQuSz28s-4FCnMIQ66fFKMshRM8yXRVTx1QH6K-ZwGTjyNekQzB8b3t0US93zxuyMNbeP6u-uOZQKi6NFfV5svh1bF8B8oXpwxc6DGCfTPvHcr0iXtmBxPu_1XDjJittY-ysYGjXabn5x1mBcwxAV_Gp4z1W88m1kmjLRuAbuqFTuQO130vFizrnUM3KzTCYPDkQhLQM3frMoiXrOeuy-qUNmW9Tm0ma7g9qhy-4QUWiAJLvWnXNqAEKH17XLUE9PvzH00QfudweqFqst1iiMi13i5WFbD0wARZ4FtUlA_cRpEwXDPlQQU2NxT_Fq98tHNU_IwGmWNKhHPnXCVEFVGfAVesQC7rDrPipuRF2Q_gUepQwxcacNEVmeQ7Lf9_SVzQo5iRUJ5-i3nb8jj5mw_z-SYm3444OARFYBnex3AWCO-Y1y9bU3bG0fTwBFetSBZ91NcBknLOk2FnALoZqVnt0ElPyweGkfxkEMak53GKfz05cOdtuNcr6IEKIdj54vks_ulDRZp5KUQctdIqT51ecaiXvLCx1X-Mlyf1KIZ4xh_0mOdLNPs39SeGc5Zavfw78jhev4hSHBhn2Ew=s180-no?authuser=0"
  
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