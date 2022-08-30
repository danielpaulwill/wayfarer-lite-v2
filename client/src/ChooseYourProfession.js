import React, { useState, useEffect } from "react";

function ChooseYourProfession({ handleMapView, setCharacterAttributes, professionChange, locationSeed }) {
 
  const [attributeError, setAttributeError] = useState('')

  const [localProfession, setLocalProfession] = useState('')
  const [localHealth, setLocalHealth] = useState('')
  const [localEvil, setLocalEvil] = useState('')
  const [localStrength, setLocalStrength] = useState('')
  const [localDefense, setLocalDefense] = useState('')
  const [localLuck, setLocalLuck] = useState('')


  function handleProfessionChange(e) {
    professionChange(e.target.value)
    setLocalProfession(e.target.value)
  }

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

  function handleOnClick() {
    // character_attributes POST
    fetch('/character-attributes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        health: localHealth,
        evil: localEvil,
        strength: localStrength,
        defense: localDefense,
        luck: localLuck,
      })})
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => setCharacterAttributes(data));
          handleMapView()
        } else {
          res.json().then((err) => setAttributeError(err.errors))
        }})
        locationSeed()
  }



  return (
    <div>
      <h2>Are You Ready?</h2>
      <p>You still aren't sure how you got here, or what this place even is.
        But there's something calming about this beach. Are you ready to begin exploring this place?</p>
        
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
        <p className={(attributeError === '') ? 'errors2' : 'errors1'}>{attributeError}</p>
        <br></br>
        <div className="center">
            <button className="normalButton" onClick={handleOnClick}>Begin Exploring</button>
        </div>
    </div>
  )
};

export default ChooseYourProfession;