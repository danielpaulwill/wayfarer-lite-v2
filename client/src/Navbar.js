import React from "react";

function Navbar({ user, onClick }) {

  return (
    <div id="navbar">
      <h3>navbar</h3>
      <button className="normalButton" onClick={onClick} >Login</button>
    </div>
  )
};

export default Navbar;