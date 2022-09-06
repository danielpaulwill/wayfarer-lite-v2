import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CharacterSidebar from "./CharacterSidebar";
import ItemsSidebar from "./ItemsSidebar";
import SetupContainer from "./SetupContainer";
import GameContainer from "./GameContainer";

function MainContainer({ user, character, characterName, characterAvatar, handleNameChange, handleAvatarClick, handleStats, handleMapView, setErrors, setCharacter, archerAvatar, mageAvatar, warriorAvatar, professionChange }) {

  return (
    <div id="gameContainer">
      <CharacterSidebar character={character} /*avatar={characterAvatar} name={characterName} health={health} evil={evil} strength={strength} defense={defense} luck={luck}*/ />
      <Routes>
        <Route path="setup" element={<SetupContainer user={user} handleNameChange={handleNameChange} handleStats={handleStats} handleAvatarClick={handleAvatarClick} handleMapView={handleMapView} characterName={characterName} characterAvatar={characterAvatar} setErrors={setErrors} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} professionChange={professionChange} /*health={health} evil={evil} strength={strength} defense={defense} luck={luck} setCharacterAttributes={handleCharacterAttributes}*/ setCharacter={setCharacter} />} />
        <Route path='play' element={<GameContainer character={character} /*characterName={characterName} characterAvatar={characterAvatar}*/ />} />
      </Routes>
      <ItemsSidebar />
    </div>
  )
};

export default MainContainer;