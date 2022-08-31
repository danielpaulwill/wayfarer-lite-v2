import React from "react";

function OptionResult({ option }) {

  // console.log({ event.options })
  // let options = event.options.map((option) => (<button className="normalButton">{option.name}</button>))
  
 
  return (
    <div className="center">
      <div>
        <h2>{option.name}</h2>
        <p>{option.description}</p>
        {/* {options} */}
      </div>
      <button className="normalButton" onClick={e => console.log("clicked")} >Return to your Adventure</button>
    </div>
  )
};

export default OptionResult;