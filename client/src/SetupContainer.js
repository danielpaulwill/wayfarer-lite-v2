import React, { useState } from "react";
import CharacterSidebar from "./CharacterSidebar";
import ItemsSidebar from "./ItemsSidebar";
import GameStart from "./GameStart";
import ChooseYourCharacter from "./ChooseYourCharacter";
import ConfirmGameBegin from "./ConfirmGameBegin";

function SetupContainer({ user, characterName, characterAvatar, handleNameChange, handleAvatarClick, handleMapView, setErrors, archerAvatar, mageAvatar, warriorAvatar }) {
  
  const gameStart = <GameStart handleClick={handleStartClick} characterName={characterName} characterAvatar={characterAvatar} />
  const chooseYourCharacter = <ChooseYourCharacter onChange={handleNameChange} onClick={handleAvatarClick} onCharacterConfirm={handleCharacterConfirm} characterName={characterName} characterAvatar={characterAvatar} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} />
  const confirmGameBegin = <ConfirmGameBegin onGameBegin={handleMapView} />

  const [currentPage, setCurrentPage] = useState(gameStart)

  function handleStartClick(e) {
    setCurrentPage(chooseYourCharacter)
  }

  function handleCharacterConfirm(characterName, characterAvatar) {
    // console.log({ chooseCharacterName, chooseCharacterAvatar })
    // POST to the server the character name, avatar, user_id (stats, etc.)
  
    fetch('/characters', {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // user_id: user.id,
        name: characterName,
        avatar: characterAvatar,
      })})
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => console.log(data));
          setCurrentPage(confirmGameBegin)
          // setCurrentPage(gameContainer)
        } else {
          res.json().then((err) => setErrors(err.errors))
        }})
  }

  return (
    <div className="gameArea">
      {currentPage}
    </div>
  )
};

export default SetupContainer;