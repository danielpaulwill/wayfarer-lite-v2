import React, { useState } from "react";
import CharacterSidebar from "./CharacterSidebar";
import ItemsSidebar from "./ItemsSidebar";
import GameStart from "./GameStart";
import ChooseYourCharacter from "./ChooseYourCharacter";
import ConfirmGameBegin from "./ConfirmGameBegin";
import ChooseYourLocation from "./ChooseYourLocation";
import Location from "./Location";

function SetupContainer({ user, characterName, characterAvatar, handleNameChange, handleAvatarClick, handleMapView }) {
  
  const gameStart = <GameStart handleClick={handleStartClick} characterName={characterName} characterAvatar={characterAvatar} />
  const chooseYourCharacter = <ChooseYourCharacter onChange={handleNameChange} onClick={handleAvatarClick} onCharacterConfirm={handleCharacterConfirm} characterName={characterName} characterAvatar={characterAvatar} />
  const confirmGameBegin = <ConfirmGameBegin onGameBegin={handleMapView} />

  const [currentPage, setCurrentPage] = useState(gameStart)


  function handleStartClick(e) {
    setCurrentPage(chooseYourCharacter)
  }

  function handleCharacterConfirm(chooseCharacterName, chooseCharacterAvatar) {
    setCurrentPage(confirmGameBegin)
    // console.log({ chooseCharacterName, chooseCharacterAvatar })
    // POST to the server the character name, avatar, user_id (stats, etc.)
  
    fetch('/users', {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user.id,
        name: characterName,
        avatar: characterAvatar,
        // password_confirmation: passwordConfirmation,
      })})
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => console.log(data));
          // setCurrentPage(gameContainer)
        } else {
          // res.json().then((err) => setErrors(err.errors))
        }})
  }

  return (
    <div id="gameContainer">
      <CharacterSidebar avatar={characterAvatar} name={characterName}/>
      {currentPage}
      <ItemsSidebar />
    </div>
  )
};

export default SetupContainer;