import React, { useEffect, useState } from "react";
import GameStart from "./GameStart";
import ChooseYourCharacter from "./ChooseYourCharacter";
import ConfirmGameBegin from "./ConfirmGameBegin";

function SetupContainer({ user, characterName, characterAvatar, handleNameChange, handleAvatarClick, handleMapView, archerAvatar, mageAvatar, warriorAvatar, professionChange, health, evil, strength, defense, luck }) {
  const [characterError, setCharacterError] = useState('')
  const [attributeError, setAttributeError] = useState('')

  const [character, setCharacter] = useState('')
  const [characterAttributes, setCharacterAttributes] = useState('')
  
  const gameStart = <GameStart handleClick={handleStartClick} characterName={characterName} characterAvatar={characterAvatar} />
  const chooseYourCharacter = <ChooseYourCharacter onChange={handleNameChange} onClick={handleAvatarClick} onCharacterConfirm={handleCharacterConfirm} characterName={characterName} characterAvatar={characterAvatar} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} professionChange={professionChange} characterError={characterError} />
  const confirmGameBegin = <ConfirmGameBegin onGameBegin={onGameBegin} setAttributeError={setAttributeError} setCharacterAttributes={setCharacterAttributes} professionChange={professionChange} />

  const [currentPage, setCurrentPage] = useState(gameStart)



  console.log({ health, evil, strength, defense, luck })
  console.log({ characterError })


  function handleStartClick(e) {
    setCurrentPage(chooseYourCharacter)
  }
  
  function handleCharacterConfirm(characterName, characterAvatar) {  
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
          res.json().then((data) => setCharacter(data));
          setCurrentPage(confirmGameBegin)
        } else {
          res.json().then((err) => setCharacterError(err.errors))
        }})
  }

  function onGameBegin() {
    fetch('/character-attributes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        health,
        evil,
        strength,
        defense,
        luck,
      })})
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => setCharacterAttributes(data));
          handleMapView()
        } else {
          res.json().then((err) => setAttributeError(err.errors))
        }})

  }

  return (
    <div className="gameArea">
      {currentPage}
    </div>
  )
};

export default SetupContainer;