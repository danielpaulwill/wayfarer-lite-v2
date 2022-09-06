import React, { useState, useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import './App.css';
import LandingPage from "./LandingPage";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
// import ChooseYourAdventurer from "./ChooseYourAdventurer";
// import Adventure from "./Adventure";

function App() {
  const blankAvatar = require("./assets/characters/blank.png")

  const archerAvatar = require("./assets/characters/archer.png")
  const mageAvatar = require("./assets/characters/mage.png")
  const warriorAvatar = require("./assets/characters/warrior.png")
  const [characterName, setCharacterName] = useState("")
  const [characterAvatar, setCharacterAvatar] = useState(blankAvatar)
 
  // window.onbeforeunload = function() { return "Your work will be lost."; };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState('');
  const [user, setUser] = useState(null);
  const [character, setCharacter] = useState('');
    
  let navigate = useNavigate()

  
  // AUTO LOGIN
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
      res.json().then((user) => {
        setUser(user)
        setCharacter(user.character)
      });
      navigate('/game/play')
      alert("Welcome back to Wayfarer! Please select a location to pick up where you left off");
    } else {
      res.json().then((err) => setErrors(err.errors))
      navigate('/welcome')
    }});
  }, []);


  useEffect(() => {
    setCharacter({
      name: characterName,
      avatar: characterAvatar
    })
  },[characterName, characterAvatar])

function handleNameChange(e) {
  setCharacterName(e.target.value.toUpperCase())
}

function handleAvatarClick(e) {
  setCharacterAvatar(e.target.src)
}

function handleMapView() {
  navigate('game/play')
  window.scrollTo(0, 0);
}

  function handleWelcomeClick() {
    navigate('/signup')
  }

  function handleLoginClick(username, password) {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user)
          setCharacter(user.character)
        });
        
        navigate('/game/play')
        window.scrollTo(0, 0);
      } else {
        res.json().then((err) => setErrors(err.errors))
      }
    });
  }

  function handleLoginSignupClick() {
    navigate('/signup')
  }

  function handlePasswordConfirmationChange(e){
    setPasswordConfirmation(e.target.value)
  }

  function handleSignupClick(signupUsername, signupPassword) {
    fetch('/users', {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: signupUsername,
        password: signupPassword,
        // password_confirmation: passwordConfirmation,
      })})
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => setUser(data));
          navigate('/game/setup')
          window.scrollTo(0, 0);
        } else {
          res.json().then((err) => setErrors(err.errors))
        }})
        
      };
  
  function handleSignupLoginClick() {
    navigate('/login')
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE" 
    }).then((res) => {
      if (res.ok) {
        setUser(null);
        navigate('/login')
      }});
  }

  return (
    <div>
      <Navbar user={user} onLogin={handleSignupLoginClick} onLogout={handleLogout}/>
      <Routes>
        <Route path='welcome' element={<LandingPage handleClick={handleWelcomeClick}/>} />
        <Route path="signup" element={<Signup handleSignupClick={handleSignupClick} handleLoginClick={handleSignupLoginClick} onPasswordConfirm={handlePasswordConfirmationChange} errors={errors} />} />
        <Route path="login" element={<Login handleLoginClick={handleLoginClick} handleSignupClick={handleLoginSignupClick} setUser={setUser} errors={errors} />} />
        <Route path="game/*" element={<MainContainer handleNameChange={handleNameChange} handleAvatarClick={handleAvatarClick} user={user} character={character} /*characterName={characterName} characterAvatar={characterAvatar}*/ handleMapView={handleMapView} setErrors={setErrors} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} setCharacter={setCharacter} />} />
      </Routes>
    </div>
  );
}

export default App;
