import React, { useEffect, useState } from "react";
import GameStart from "./GameStart";
import ChooseYourCharacter from "./ChooseYourCharacter";
import ChooseYourProfession from "./ChooseYourProfession";
import LoadingPage from "./LoadingPage";

function SetupContainer({ user, characterName, characterAvatar, handleNameChange, handleAvatarClick, handleMapView, archerAvatar, mageAvatar, warriorAvatar, professionChange, health, evil, strength, defense, luck, setCharacterAttributes, setCharacter }) {
  
  const gameStart = <GameStart handleClick={handleStartClick} characterName={characterName} characterAvatar={characterAvatar} />
  const chooseYourProfession = <ChooseYourProfession handleMapView={handleMapView} /*setCharacterAttributes={setCharacterAttributes}*/ health={health} evil={evil} strength={strength} defense={defense} luck={luck} locationSeed={locationSeed} />
  const chooseYourCharacter = <ChooseYourCharacter onChange={handleNameChange} onClick={handleAvatarClick} professionChange={professionChange} characterName={characterName} characterAvatar={characterAvatar} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} professionChange={professionChange} setCharacter={setCharacter} onCharacterConfirm={onCharacterConfirm} />
  const loadingPage = <LoadingPage />

  const [currentPage, setCurrentPage] = useState(gameStart)


  function handleStartClick(e) {
    setCurrentPage(chooseYourCharacter)
    window.scrollTo(0, 0);
  }

  function onCharacterConfirm() {
    setCurrentPage(chooseYourProfession)
    window.scrollTo(0, 0);
  }

  function locationSeed() {
    setCurrentPage(loadingPage)
    // locations POST
    fetch('/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([]),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Locations POSTed")
        }})

    setTimeout(function(){ 
      // events POST
      fetch('/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([]),
      })
        .then((res) => {
          if (res.ok) {
            console.log("Events POSTed")
            
          }})

      }, 1000);


    setTimeout(function(){
      // options Post
      fetch('/options', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([]),
      })
        .then((res) => {
          if (res.ok) {
            console.log("Options POSTed")
          }})
    }, 2000);


    setTimeout(function() {
      handleMapView()
    }, 3000)

  }

  return (
    <div className="gameArea">
      {currentPage}
    </div>
  )
};

export default SetupContainer;