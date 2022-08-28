import React, { useEffect, useState } from "react";

function ChooseYourCharacter({ onClick, onChange, setCurrentPage, chooseYourProfession, archerAvatar, mageAvatar, warriorAvatar, blankAvatar, setCharacter, onCharacterConfirm }) {

  const [chooseCharacterName, setChooseCharacterName] = useState('')
  const [chooseCharacterAvatar, setChooseCharacterAvatar] = useState(blankAvatar)  

  const [characterError, setCharacterError] = useState('')


  function handleOnClick(e) {
    setChooseCharacterAvatar(e.target.src)
    onClick(e)
  }

  function handleOnChange(e) {
    setChooseCharacterName(e.target.value.toUpperCase())
    onChange(e)
  }

  function handleCharacterConfirm() {  
    fetch('/characters', {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // user_id: user.id,
        name: chooseCharacterName,
        avatar: chooseCharacterAvatar,
      })})
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => setCharacter(data));
          onCharacterConfirm()
        } else {
          res.json().then((err) => setCharacterError(err.errors))
        }})
  }

  return (
      <div>
        <h2>Choose Your Character</h2>
        <h3>ENTER NAME BELOW</h3>
          <input
          type="text" 
          placeholder="Enter Name Here..." 
          className="textInput"
          onChange={handleOnChange} >
          </input>
            <br></br>
            <h3>CHOOSE YOUR AVATAR</h3>
          <p className={(characterError === '') ? 'errors2' : 'errors1'}>{characterError}</p>
          <div className="center">
            <div className="chooseYourAvatarContainer">
              <img className="chooseYourAvatarImg" onClick={handleOnClick} src={warriorAvatar}></img>
            </div>
            <div className="chooseYourAvatarContainer">
              <img className="chooseYourAvatarImg" onClick={handleOnClick} src={archerAvatar}></img>
            </div>
            <div className="chooseYourAvatarContainer">
              <img className="chooseYourAvatarImg" onClick={handleOnClick} src={mageAvatar}></img>
            </div>
          </div>
          <br></br>
          <div className="center">
            <button className="normalButton" onClick={handleCharacterConfirm}>Confirm your Character</button>
          </div>
      </div>
  )
};

export default ChooseYourCharacter;