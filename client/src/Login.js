import React from "react";

function Login({ handleLoginClick, handleSignupClick }) {

  return (
    <div id="welcome">
      <h3>Login</h3>
      <form>
        <input className="textInput" type="text" placeholder="username"></input>
        <br></br>
        <br></br>
        <input className="textInput" type="password" placeholder="password"></input>
        <br></br>
        <br></br>
        <br></br>
        <button className="normalButton" onClick={handleLoginClick}>Log in</button>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <p>Haven't played yet?</p>
        <button className="normalButton" onClick={handleSignupClick}>Start Game Here</button>
      </div>
    </div>
  )
};

export default Login;