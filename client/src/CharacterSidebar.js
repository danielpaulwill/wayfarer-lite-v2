import React, { useEffect, useState } from "react";

function CharacterSidebar({ character, name, avatar, health, strength, defense, luck }) {

  return (
    <div id="characterSidebar">
      <h2 style={character.name === "" ? {color: "black"} : {color: "white"}}>{character.name}</h2>
      <img src={character.avatar} referrerPolicy="no-referrer"></img>
      <div id="sidebarStats">
        <h3>Stats</h3>
        <p>Health: {health}</p>
        <div id={(health === '') ? "blankBar" : "healthBar"} style={{width: `${health}%`}}></div>
        <p>Strength: {strength}</p>
        <div id={(strength === '') ? "blankBar" : "strengthBar"} style={{width: `${strength}%`}}></div>
        <p>Defense: {defense}</p>
        <div id={(defense === '') ? "blankBar" : "defenseBar"} style={{width: `${defense}%`}}></div>
        <p>Luck: {luck}</p>
        <div id={(luck === '') ? "blankBar" : "luckBar"} style={{width: `${luck}%`}}></div>
      </div>
    </div>
  )
};

export default CharacterSidebar;





