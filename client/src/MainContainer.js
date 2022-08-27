import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CharacterSidebar from "./CharacterSidebar";
import ItemsSidebar from "./ItemsSidebar";
import SetupContainer from "./SetupContainer";
import GameContainer from "./GameContainer";

function MainContainer({ user, characterName, characterAvatar, handleNameChange, handleAvatarClick, handleMapView, setErrors, archerAvatar, mageAvatar, warriorAvatar }) {
  const [chooseProfession, setChooseProfession] = useState('')
  const [health, setHealth] = useState(0)
  const [evil, setEvil] = useState(0)
  const [strength, setStrength] = useState(0)
  const [defense, setDefense] = useState(0)
  const [luck, setLuck] = useState(0)

  useEffect(() => {
    if (chooseProfession === '') {
      console.log('nope')
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
      <CharacterSidebar avatar={characterAvatar} name={characterName} health={health} evil={evil} strength={strength} defense={defense} luck={luck} />
      <Routes>
        <Route path="setup" element={<SetupContainer user={user} handleNameChange={handleNameChange} handleAvatarClick={handleAvatarClick} handleMapView={handleMapView} characterName={characterName} characterAvatar={characterAvatar} setErrors={setErrors} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} professionChange={professionChange} health={health} evil={evil} strength={strength} defense={defense} luck={luck} />} />
        <Route path='play' element={<GameContainer characterName={characterName} characterAvatar={characterAvatar} />} />
      </Routes>
      <ItemsSidebar />
    </div>
  )
};

export default MainContainer;