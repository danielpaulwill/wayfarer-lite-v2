import React from "react";

function ConfirmGameBegin({ onGameBegin }) {
 
  function handleOnClick() {
    
/*
  // JUST AN EXAMPLE, CAN GET RID OF "data"
  const data = { username: 'example' };

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
  return (
    <div className="gameArea">
      <h2>Are You Ready?</h2>
      <p>You still aren't sure how you got here, or what this place even is.
        But there's something calming about this beach. Are you ready to begin exploring this place?</p>
        
        <br></br>
        <div className="center">
            <button className="normalButton" onClick={handleOnClick}>Begin Exploring</button>
        </div>
    </div>
  )
};

export default ConfirmGameBegin;