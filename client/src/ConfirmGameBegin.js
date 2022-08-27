import React from "react";

function ConfirmGameBegin({ onGameBegin, setCharacterAttributes, setAttributeError, professionChange }) {
 
  function handleOnClick() {
/*
  
  // Use the session user_id to find the character_id to .create the locations
  fetch('xxx', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => if res.ok? (not sure if this is right syntax res.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    */
    onGameBegin()

 }

 function handleProfessionChange(e) {
  professionChange(e.target.value)
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
        <div className="center">
            <button className="normalButton" onClick={handleOnClick}>Begin Exploring</button>
        </div>
    </div>
  )
};

export default ConfirmGameBegin;