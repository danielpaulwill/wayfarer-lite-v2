import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CharacterSidebar from "./CharacterSidebar";
import ItemsSidebar from "./ItemsSidebar";
import SetupContainer from "./SetupContainer";
import GameContainer from "./GameContainer";

function MainContainer({ user, character, characterName, characterAvatar, handleNameChange, handleAvatarClick, handleMapView, setErrors, setCharacter, archerAvatar, mageAvatar, warriorAvatar }) {
  const [chooseProfession, setChooseProfession] = useState('')
  const [characterAttributes, setCharacterAttributes] = useState('')

  const [health, setHealth] = useState('')
  const [evil, setEvil] = useState('')
  const [strength, setStrength] = useState('')
  const [defense, setDefense] = useState('')
  const [luck, setLuck] = useState('')


  useEffect(() => {
    if (chooseProfession === '') {
    } else if (chooseProfession === 'Firefighter') {
      setHealth(100)
      setEvil(20)
      setStrength(60)
      setDefense(30)
      setLuck(20)
    } else if (chooseProfession === 'Lawyer') {
      setHealth(100)
      setEvil(80)
      setStrength(40)
      setDefense(70)
      setLuck(20)
    } else if (chooseProfession === 'Engineer') {
      setHealth(100)
      setEvil(50)
      setStrength(50)
      setDefense(50)
      setLuck(50)
    }
  }, [chooseProfession])

  function professionChange(profession) {
    setChooseProfession(profession)
  }

  return (
    <div id="gameContainer">
      <CharacterSidebar character={character} avatar={characterAvatar} name={characterName} health={health} evil={evil} strength={strength} defense={defense} luck={luck} />
      <Routes>
        <Route path="setup" element={<SetupContainer user={user} handleNameChange={handleNameChange} handleAvatarClick={handleAvatarClick} handleMapView={handleMapView} characterName={characterName} characterAvatar={characterAvatar} setErrors={setErrors} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} professionChange={professionChange} health={health} evil={evil} strength={strength} defense={defense} luck={luck} setCharacterAttributes={setCharacterAttributes} setCharacter={setCharacter} />} />
        <Route path='play' element={<GameContainer characterName={characterName} characterAvatar={characterAvatar} />} />
      </Routes>
      <ItemsSidebar />
    </div>
  )
};

export default MainContainer;