import React, { useEffect, useState } from "react";

function ChooseYourCharacter({ onClick, onChange, professionChange, setCurrentPage, chooseYourProfession, archerAvatar, mageAvatar, warriorAvatar, blankAvatar, setCharacter, onCharacterConfirm }) {

  const [chooseCharacterName, setChooseCharacterName] = useState('')
  const [chooseCharacterAvatar, setChooseCharacterAvatar] = useState(blankAvatar)
  const [characterError, setCharacterError] = useState('')

  const [localProfession, setLocalProfession] = useState('')
  const [localHealth, setLocalHealth] = useState('')
  const [localEvil, setLocalEvil] = useState('')
  const [localStrength, setLocalStrength] = useState('')
  const [localDefense, setLocalDefense] = useState('')
  const [localLuck, setLocalLuck] = useState('')

  useEffect(() => {
    if (localProfession === '') {
    } else if (localProfession === 'Firefighter') {
      setLocalHealth(100)
      setLocalEvil(20)
      setLocalStrength(60)
      setLocalDefense(30)
      setLocalLuck(20)
    } else if (localProfession === 'Lawyer') {
      setLocalHealth(100)
      setLocalEvil(80)
      setLocalStrength(40)
      setLocalDefense(70)
      setLocalLuck(20)
    } else if (localProfession === 'Engineer') {
      setLocalHealth(100)
      setLocalEvil(50)
      setLocalStrength(50)
      setLocalDefense(50)
      setLocalLuck(50)
    }
  }, [localProfession])

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
        name: chooseCharacterName,
        avatar: chooseCharacterAvatar,
        health: localHealth,
        evil: localEvil,
        strength: localStrength,
        defense: localDefense,
        luck: localLuck
      })})
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => setCharacter(data));
          onCharacterConfirm()
        } else {
          res.json().then((err) => setCharacterError(err.errors))
        }})
  }

  function handleProfessionChange(e) {
    professionChange(e.target.value)
    setLocalProfession(e.target.value)
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
          <h3>CHOOSE YOUR PROFESSION</h3>
            <form className="container" onChange={handleProfessionChange}>
              <label className="checkmark">Firefighter
              <input type="radio" name="profession" value="Firefighter"></input>
              </label>
              <label className="checkmark">Lawyer
              <input type="radio" name="profession" value="Lawyer"></input>
              </label>
              <label className="checkmark">Engineer
              <input type="radio" name="profession" value="Engineer"></input>
              </label>
            </form>
          <br></br>
          <br></br>
          <div className="center">
            <button className="normalButton" onClick={handleCharacterConfirm}>Confirm your Character</button>
          </div>
      </div>
  )
};

export default ChooseYourCharacter;