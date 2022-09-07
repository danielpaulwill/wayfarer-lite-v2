import React, { useEffect, useState } from "react";

function ChooseYourCharacter({ handleAvatarClick, handleNameChange, handleProfessionChange, handleCharacterConfirm, setCurrentPage, chooseYourProfession, archerAvatar, mageAvatar, warriorAvatar, blankAvatar, setCharacter }) {

  // const [chooseCharacterName, setChooseCharacterName] = useState('')
  const [chooseCharacterAvatar, setChooseCharacterAvatar] = useState(blankAvatar)
  const [characterError, setCharacterError] = useState('')

  // const [localProfession, setLocalProfession] = useState('')
  const [localHealth, setLocalHealth] = useState('')
  const [localEvil, setLocalEvil] = useState('')
  const [localStrength, setLocalStrength] = useState('')
  const [localDefense, setLocalDefense] = useState('')
  const [localLuck, setLocalLuck] = useState('')

  // useEffect(() => {
  //   if (localProfession === '') {
  //   } else if (localProfession === 'Firefighter') {
  //     setLocalHealth(100)
  //     setLocalEvil(20)
  //     setLocalStrength(60)
  //     setLocalDefense(30)
  //     setLocalLuck(20)
  //   } else if (localProfession === 'Lawyer') {
  //     setLocalHealth(100)
  //     setLocalEvil(80)
  //     setLocalStrength(40)
  //     setLocalDefense(70)
  //     setLocalLuck(20)
  //   } else if (localProfession === 'Engineer') {
  //     setLocalHealth(100)
  //     setLocalEvil(50)
  //     setLocalStrength(50)
  //     setLocalDefense(50)
  //     setLocalLuck(50)
  //   }
  // }, [localProfession])

  return (
      <div>
        <h2>Choose Your Character</h2>
        <h3>ENTER NAME BELOW</h3>
          <input
          type="text" 
          placeholder="Enter Name Here..." 
          className="textInput"
          onChange={e => handleNameChange(e)} >
          </input>
            <br></br>
            <h3>CHOOSE YOUR AVATAR</h3>
          <p className={(characterError === '') ? 'errors2' : 'errors1'}>{characterError}</p>
          <div className="center">
            <div className="chooseYourAvatarContainer">
              <img className="chooseYourAvatarImg" onClick={e => handleAvatarClick(e)} src={warriorAvatar}></img>
            </div>
            <div className="chooseYourAvatarContainer">
              <img className="chooseYourAvatarImg" onClick={e => handleAvatarClick(e)} src={archerAvatar}></img>
            </div>
            <div className="chooseYourAvatarContainer">
              <img className="chooseYourAvatarImg" onClick={e => handleAvatarClick(e)} src={mageAvatar}></img>
            </div>
          </div>
          <br></br>
          <h3>CHOOSE YOUR PROFESSION</h3>
            <form className="container" onChange={e => handleProfessionChange(e)}>
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