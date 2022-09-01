import React from "react";

function OptionResult({ option, locationWorkaround }) {  

  console.log({ option })
 
  return (
    <div className="center">
      <div>
        <h2>{option.name}</h2>
        <p>{option.description}</p>
      </div>
      <button className="normalButton" onClick={locationWorkaround} >Return to your Adventure</button>
    </div>
  )
};

export default OptionResult;