import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CharacterSidebar from "./CharacterSidebar";
import ItemsSidebar from "./ItemsSidebar";
import SetupContainer from "./SetupContainer";
import GameContainer from "./GameContainer";

function MainContainer({ user, characterName, characterAvatar, handleNameChange, handleAvatarClick, handleMapView, setErrors, archerAvatar, mageAvatar, warriorAvatar }) {
  

  return (
    <div id="gameContainer">
      <CharacterSidebar avatar={characterAvatar} name={characterName}/>
      <Routes>
        <Route path="setup" element={<SetupContainer user={user} handleNameChange={handleNameChange} handleAvatarClick={handleAvatarClick} handleMapView={handleMapView} characterName={characterName} characterAvatar={characterAvatar} setErrors={setErrors} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} />} />
        <Route path='play' element={<GameContainer characterName={characterName} characterAvatar={characterAvatar} />} />
      </Routes>
      <ItemsSidebar />
    </div>
  )
};

export default MainContainer;