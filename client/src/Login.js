import React, { useState } from "react";

function Login({ handleLoginClick, handleSignupClick, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log({ username })
  console.log({ password })

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }
  

  return (
    <div id="welcome">
      <h3>Login</h3>
      <form>
        <input className="textInput" type="text" placeholder="username" onChange={e => setUsername(e.target.value)}></input>
        <br></br>
        <br></br>
        <input className="textInput" type="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <br></br>
        <button className="normalButton" onClick={handleSubmit}>Log in</button>
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