import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import OneOneChoices from "./Stage 1/OneOneChoices";
import OneOneOptOneResult from "./Stage 1/OneOneOptOneResult";
import OneOneOptTwoResult from "./Stage 1/OneOneOptTwoResult";
import OneTwoChoices from "./Stage 1/OneTwoChoices";
import ItemInfoSidebar from "./ItemInfoSidebar";

function Adventure({ name, avatar, health, strength, defense, luck, decrementHealth, incrementDefense, randomizeLuck, currentItems }) {

  const isVisibleOne = useRef(true)
  // const isVisibleTwo = useRef(true) -- another useRef to get rid of a button

  const oneOneChoice = <OneOneChoices onChoiceClick={handleOneOneChoiceClick} isVisibleOne={isVisibleOne} />
  const [choicesPage, setChoicesPage] = useState(oneOneChoice)
  
  const oneOneOneResult = <OneOneOptOneResult handleGoBack={handleOneOneOneGoBack} />
  const oneOneTwoResult = <OneOneOptTwoResult handleOnToTwo={handleOnToTwo} />
  const oneOneThreeResult = null
  const oneOneFourResult = null
  const oneTwoChoice = <OneTwoChoices decrementHealth={decrementHealth} incrementDefense={incrementDefense} randomizeLuck={randomizeLuck} />
  
  function handleOptOneIsVisible() {
    isVisibleOne.current = false
  }
  
  function handleOneOneChoiceClick(num) {
    if (num === 1) {
      handleOptOneIsVisible()
      setChoicesPage(oneOneOneResult)
    } else {setChoicesPage(oneOneTwoResult)}
  }

  function handleOnToTwo() {
    setChoicesPage(oneTwoChoice)
    }

  function handleOneOneOneGoBack() {
    setChoicesPage(oneOneChoice)
  }

  return (
    <div className="adventurePage">
      <Sidebar 
        name={name}
        avatar={avatar}
        health={health}
        strength={strength}
        defense={defense}
        luck={luck} />
      <div className="adventureMain">
        {choicesPage}
      </div>
      {/* <RightSidebar 
        name={name}
        avatar={avatar}
        health={health}
        strength={strength}
        defense={defense}
        luck={luck}
        currentItems={currentItems} /> */}
        <ItemInfoSidebar currentItems={currentItems} />
    </div>
  )
};

export default Adventure;