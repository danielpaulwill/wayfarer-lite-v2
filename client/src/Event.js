import React from "react";

function Event({ event }) {

  let options = event.options.map((option) => (<button className="normalButton">{option.name}</button>))
  // name: "Event One",
  //       description: "The first Event",
  //       is_complete: false,
  //       options: [{
    // name: "Option One",
    //       description: "The first option of the first event",
    //       is_complete: false
 
  return (
    <div className="gameArea">
      <div className="center">
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        {options}
      </div>
    </div>
  )
};

export default Event;