import React, { useEffect, useState } from "react";

function CharacterSidebar({ character }) {

  console.log({ character })

  return (
    <div id="characterSidebar">
      <h2 style={character.name === "" ? {color: "black"} : {color: "white"}}>{character.name}</h2>
      <img src={character.avatar} referrerPolicy="no-referrer"></img>
      <div id="sidebarStats">
        <h3>Stats</h3>
        <p>Health: {character.health}</p>
        <div id={(character.health === '') ? "blankBar" : "healthBar"} style={{width: `${character.health}%`}}></div>
        <p>Strength: {character.strength}</p>
        <div id={(character.strength === '') ? "blankBar" : "strengthBar"} style={{width: `${character.strength}%`}}></div>
        <p>Defense: {character.defense}</p>
        <div id={(character.defense === '') ? "blankBar" : "defenseBar"} style={{width: `${character.defense}%`}}></div>
        <p>Luck: {character.luck}</p>
        <div id={(character.luck === '') ? "blankBar" : "luckBar"} style={{width: `${character.luck}%`}}></div>
      </div>
    </div>
  )
};

export default CharacterSidebar;





