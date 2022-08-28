import React, { useEffect, useState } from "react";
import GameStart from "./GameStart";
import ChooseYourCharacter from "./ChooseYourCharacter";
import ChooseYourProfession from "./ChooseYourProfession";

function SetupContainer({ user, characterName, characterAvatar, handleNameChange, handleAvatarClick, handleMapView, archerAvatar, mageAvatar, warriorAvatar, professionChange, health, evil, strength, defense, luck, setCharacterAttributes, setCharacter }) {
  
  const gameStart = <GameStart handleClick={handleStartClick} characterName={characterName} characterAvatar={characterAvatar} />
  const chooseYourProfession = <ChooseYourProfession handleMapView={handleMapView} setCharacterAttributes={setCharacterAttributes} professionChange={professionChange} health={health} evil={evil} strength={strength} defense={defense} luck={luck} />
  const chooseYourCharacter = <ChooseYourCharacter onChange={handleNameChange} onClick={handleAvatarClick} characterName={characterName} characterAvatar={characterAvatar} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} professionChange={professionChange} setCharacter={setCharacter} onCharacterConfirm={onCharacterConfirm} />
  
  const [currentPage, setCurrentPage] = useState(gameStart)


  function handleStartClick(e) {
    setCurrentPage(chooseYourCharacter)
    window.scrollTo(0, 0);
  }

  function onCharacterConfirm() {
    setCurrentPage(chooseYourProfession)
    window.scrollTo(0, 0);
  }

  return (
    <div className="gameArea">
      {currentPage}
    </div>
  )
};

export default SetupContainer;