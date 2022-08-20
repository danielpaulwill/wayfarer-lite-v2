import React, { useState, useEffect } from "react"
import './App.css';
import LandingPage from "./LandingPage";
import Login from "./Login";
import Signup from "./Signup";
import GameContainer from "./GameContainer"
import Navbar from "./Navbar";
// import ChooseYourAdventurer from "./ChooseYourAdventurer";
// import Adventure from "./Adventure";

function App() {
  const blankAvatar = "https://lh3.googleusercontent.com/5sU9jT3rtB3zLjJppnT50Inb5cylBJA933lPDE4119lC9uToYigbSAtC8ynG-jUf0Tmyn7Y3Qn31brMhZ-S9eyhYU4KdUsFYHhClWOowCVtVP-G02ZqWKZZCzM7wJdfgxqvartNW18QJc6CsZZ2LWiGe4oo4mB_rGRnUQs2vRJaWZihhiR0vgXfKXU3AOhiaLo3Ln1QOp2lUWnv28svd_1G-ZfG4Wn6Z0CidnmSIenWdWY-WZQq7uQuSz28s-4FCnMIQ66fFKMshRM8yXRVTx1QH6K-ZwGTjyNekQzB8b3t0US93zxuyMNbeP6u-uOZQKi6NFfV5svh1bF8B8oXpwxc6DGCfTPvHcr0iXtmBxPu_1XDjJittY-ysYGjXabn5x1mBcwxAV_Gp4z1W88m1kmjLRuAbuqFTuQO130vFizrnUM3KzTCYPDkQhLQM3frMoiXrOeuy-qUNmW9Tm0ma7g9qhy-4QUWiAJLvWnXNqAEKH17XLUE9PvzH00QfudweqFqst1iiMi13i5WFbD0wARZ4FtUlA_cRpEwXDPlQQU2NxT_Fq98tHNU_IwGmWNKhHPnXCVEFVGfAVesQC7rDrPipuRF2Q_gUepQwxcacNEVmeQ7Lf9_SVzQo5iRUJ5-i3nb8jj5mw_z-SYm3444OARFYBnex3AWCO-Y1y9bU3bG0fTwBFetSBZ91NcBknLOk2FnALoZqVnt0ElPyweGkfxkEMak53GKfz05cOdtuNcr6IEKIdj54vks_ulDRZp5KUQctdIqT51ecaiXvLCx1X-Mlyf1KIZ4xh_0mOdLNPs39SeGc5Zavfw78jhev4hSHBhn2Ew=s180-no?authuser=0"
  const archerAvatar = "https://lh3.googleusercontent.com/JwMsZ3R2iHSBjWYQWoIgLBXe1M1rxpCxSb5nB3EuGN83peNvNWib68ydPogl-pILdIwAmk2vlXKljdbc90mWWZzj1xWvbv6UeeAv_VtR1WK_KOaKbExB_AKA2sWX2drp6FhkSYzheINFUrZHj3bczzLuqKTHImYnvCHxqp7Rq-p56o4roZT0xocrH2UtlHR-rSe9OIfl0zTNBl_nezwLvga-VxZs7IWLLq2f817YLo5eLLEmK6oypMsr8LIox8ISCO1O0g1C3WaXCxTvVLXOZjrNq7JdACOafqvTdB9H0oYDuTRxZ7fos85sPBHo8om_fHp__FPYVs2MV3aPUpRrNs7PNSIUAnmlV23uOlRcOzwJCJOoa1al54BPT8NQ2zjgSpYKCXp-jwh9YOsHpu8LgBH-S-LLhckjZqCwpG7TPQ-0HPM0Wfm0MluuITOu2TIUop-VctZhEtzxl0A_w3DOsLrolNoOyeFyKFwYEnVa-oeybiRIXp9Fgrkj3ftlj6NqZxzpgc0WcFTy-_xSU-Uu9Xq_7uqlb0g9M3gTD8DrKeoNsvXNJ_cQkqEzZEBFxWjwIyQAx8xQ555pUszC_7o0PSM9kQ_kmubYHEhQsEF9LgxwtxvDTIk_hGIUfinJkvr_RrujwteauGSJU33O3uQUX4UWDthZiyNK3ioCsutCy73qObbXxf6zspp3y41sL7AMulA3Nc8_5xHftSOTsCzdNJR4WxO0PTPazIEkXtQn_BdGuR2JTI-u4GKi1vHDWZ9RuQfUhksnoKV8xMTBjQOCIs1IpO1aF_ynUjeBenc5wKVb9TafECxU4SYtO2jzrfF8C2zL-A=s180-no?authuser=0"
  const mageAvatar = "https://lh3.googleusercontent.com/upyKddKTFef-o9FxU1MVitOJUaqM6-e_0xSANYm8bE-P5AyN6VuQkQdLy1Zr7NV7s9VXh7lgCsZ2AYQVrBOkx3MUJX8IkzzK_sXWEBDZyyXJ2zYMzt_L0V6A0JVh7okkcsXJNvijt5kzLuz0ofEFlWvV5T7IXKDDhdzcbaI28Zq0PmCSVEbqJjf36onc9b5nRTZbKBDnjjffNMNRF_oV-cuzqBGDHVTcjMTCkxT1LwIstR8jS3T9t-vxMSbOmLExeqDnrI1XkBEl1V-vrWRG29GF-3iiTuQTGx8pvn2i1nbOqB_fcmuvzg6o3lsTiwik2JuDaiOEfLrThX74hAYGw5NBG_mUt4Hy7camFQXv4qLifvVVvPEbNrkZ0NUbdh4jjULPqfWIB-pXW0KRzb4fAb2wKYloZzxD9-kG20gtA8IA_L-1eEJmfQcAYm-PtUQf3AlPOyHzSdG-TJ1HsaXsrH-_-KjAKLuUWZHrCfyS8jWrhFl89MWAxcFfYam1G-_MbOl-9d4ncM5ZnX4zkXXhWUZ8RcgF8X7FJk0-ouASDKM78mUAO1tO37nr0eXd2scvChpJG_HlG8ZL0-83aoPZD1cfHm_dh1JMXe-eqaFHo2hCGzrM9uWr0X7jxI_3HlcJBwkwI_Ko1K2NIlzcE8L7gUl1GA6Kyzw3QL3a7uVNPosA1xroScGQSx2bj5ajH18LRIAFNwlHwfM6ngl1O3xOOmlKWMpfGsRsrQQ-bb8n6lOycnLvlOaez0jZCphL8tU5xNR0vmkzoc_YGoeGrmNjLUaAO5c1gXdHisShiAygecDEHVxmAZN48f5ky_5JuLpHAT9f-w=s180-no?authuser=0"
  const warriorAvatar = "https://lh3.googleusercontent.com/h8gX2Igm9NEPpK_ecVD0s_W4KrTQgkbuHldBunWmhD3HJ2AQTCHb97ZoXmVORBDMMijaoWdu9-v1rCHvDcRZUH19zgpqJEE_68hht0ZId46mPivakIjemfcydBuTGdrkxilhRZigxwzLeFzssSc4rR-lkiLrOPoTRM90Kb3sazys7ZCjHMWi8uApIHPHSEBkVd8CYYG3oW0SPOFXwqX_WWyCCnGBzsvbHYNAfgMXF7xLN7z-1eJffdjtr1_yN1PhA46on3iTyLsjX4tgnKWqF_W8G_js0QTGnGOqLmYhwcSWGsiuRnl5uKNLg94AYCbq5VfsyO2L-OjJtU0ZNaSqepE69vy81ut9CK5cjcbtp19Ccq_s4i1PU36rwLjq1fhv4e7s_yL3WDF4l-sD6Kb7D9SsMhSp3pwntRJL0dwSTtgZXs7UEMQ47uE7A6rTIp9xE5yVKt6t3O1OFDJ_Oq1SRfEc6mWLj_EuFKUBa39D7aMwBhtUNtyX46vmWUmFA9L2235x3qx-8MtlNJyViUR66GgePehYLiQWoxtmS_yNkNMzsrKpEAC-xNxu5GIxh27aBm5rYxpIAsFJEklEwZ4UZlz-QWwNiuC94jtvQja-1INmWIab39GAPVi2RcPtPOWbMk2YxO2d4FbJU9GQ5xWaLoTA3A6nMrOJV0sdutGL6KHlKh59E5mKR3HUQbU1ElTAIWCZJkQ6IM8QDUdCXcdGCzoBTN_sOwWsBxsONAGtnJiDHOWDX8TTPiZBRTmQbKyyugmFH-_lLsRA7P1QhM_hQk9bnMR8VIUHSwhhMoSQqCB3sY7rAe7fwulsVa94H1l2QdZeUg=s180-no?authuser=0"
  const [characterName, setCharacterName] = useState("your character's name here")
  const [characterAvatar, setCharacterAvatar] = useState(blankAvatar)
  // const [health, setHealth] = useState(0)
  // const [strength, setStrength] = useState(0)
  
  // Dexterity
  // Wisdom -- if wisdom is high enough, extra options could appear
  // Charisma -- if charisma is high enough "persuade" options could appear
  // Intelligence -- Helps with magic. helps with knowledge checks
  // const [defense, setDefense] = useState(0)
  // const [luck, setLuck] = useState(0)
  
  // window.onbeforeunload = function() { return "Your work will be lost."; };
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  
  const landingPage = <LandingPage handleClick={handleWelcomeClick}/>
  const login = <Login handleLoginClick={handleLoginClick} handleSignupClick={handleLoginSignupClick} />
  const signup = <Signup handleSignupClick={handleSignupClick} handleLoginClick={handleSignupLoginClick} /*onUsername={handleUsernameChange} onPassword={handlePasswordChange}*/ onPasswordConfirm={handlePasswordConfirmationChange} />
  const gameContainer = <GameContainer/>

  const [currentPage, setCurrentPage] = useState(signup)
  const [user, setUser] = useState(null);

  console.log({user})

// AUTOMATIC LOGIN USING SESSION

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

{/* if (!user) return <Login onLogin={setUser} />; */}





  {/* const axe = {
    name: "Axe",
    quantity: 1,
    category: "weapon",
    image: "https://lh3.googleusercontent.com/uOFo1VAumsc7OfxEdYDXwzjYkHE5QMTbNEYePk01jCwBLOyKNiuUXJ-PdS7kS9_kwdV5rBvGrdDiG2IYEH9DIANflymGUOf9Lj4N4UeuFLwznqjMubCL0M87q5T8JR6Xp8LON7qNfW5AslXlJUUhypeEYjYnmZVSLFSIJD2tB6bCNTIUJ8yWhPpx5otsNeOKQUM-jpBXZXC-LarHmQYetAMTMcRW-O7s8PbukySgvjEgYveKXZvpxKBp8rzlHlGKwK5uREjv5uN7wr0MIsWCgsrLAeGS6eBy3TZUh3fxu2_Yw6sOHswSi3Fg_na5Od7Q1MrNHR_yF6ZwCWb7FxXWOZQjNX6YanpiwQ7t_juT0rUFL43GMMI7I2CSO0AkEAqKP1QOUL2i0SMo-wkMuYHJHi5xu1TiWeBOAR075RRLDeTPxDrmUGNZDQDzdYLG9OWHYlRp6JEvoLjcUCJ6gjv0Gq540G0wzcXbjoSwk_GwJrKLEsJBoFlcu4AhenbX7aADyd7kyBJwqd4ezO1fVdxdYjjel4hrPn4NzXn_kpA27p_HILjo1gQRDKPEtFQEyWxbVE-WhT35q3ouBWN1nUBoDWsywPPTK3NlDALN_cP45HBBtomKJ8PPygEIdUqELaIiJOG8rw2xIZrHIG7X1kxRRcAt9B1r0B__kqNYvu3ywUc4Sb1hBnZpnBiauZNKMygRjE1L6pFrsYgOm5Cpsu-iWK3_jDUvpoylSOleL2w12yKhW9q4wWLVn2aLidaquj0qjnPjh5btn51dTGjFuVDebnTNdx_rS-ebSjE=w462-h456-no?authuser=0"
  }

  const potion = {
    name: "Potion",
    quantity: 3,
    category: "item",
    description: "Potions are a one-use item. Some potions can heal your health, others can replenish your magic. Some have lasting effects, others have momentary boosts to your stats.",
    image: "https://lh3.googleusercontent.com/wdOoItFjbjKFUCeASwqOB1_1w1AJA2Qpwyr3Y45GHp1VAVI3Omc0QaNZ1atcTvDlUu-sBefuCAL_0gGju5os5sCzlqVBMo4OekAGhH7Mk2XDIF1kh4MRn0p9C8anTEB4_C9evNAe29uekoUw3BB2XnSWxLSU6TPlJ57uaoSJnwNJ0Kih3BaQ6Rxd0ucWPVSMw8MbSBGSqWSERUlB5f4FWN-jcC-tn8OoOrq0ESKPw4WZYteY-ABQY9zVOfNrB9TKLrX8smWrVQEnDlKNhWk8mnGH_Hpf2QVtv2rOReO8VAO-ZMLQ-tdyYorJ-y8PUSMmggEr4LCbEHtKYdnebDvU3suuurQpBabtYWKLTHFP_f3t6RgROz4S7jgG5a560iOA8bgTZR6RXGHSbQyAn4gmsuC34eLLq_Y7XaJ6kocyeYTvdFW1zK7hqdyJxayPkXtYvHs5nZDWyL96yIu98mlofXUFa1Cclb_1w8-3tTJFch52tW2wJoQdYEf0DkR_vTFT4oswHVn7a8FkHVInLv-chOOvtPJ4xAekpZ5fZ-8KTRqYboNwU0duk_QbE4hB3ikjuOl7fDHwZfwyppx5N8Ywk7IjEXKGlEVUPuyTX1V7KgD_KTFlt3lkjW_lvSqyybP7wDhOBJSZhLilkBgm7viFmJ6F2YIzC_inmL7vuMNjDPohCd4S1uTcWHbgl2kF5gmt_F-Gy9aLB6bWcJ3h3LeWXzmnq9qY-L0_2qMw6LpAHC2KSIvf-DBpECevsCjPGuPoA12pcyMbkjqsdDRUSBq_-Q9Cg7WVJUF0aNgTVyLDz7ac1MaTs8NhJcs7X7HTJ6dKCnS9kw=s296-no?authuser=0"
  }

  const treasure = {
    name: "Treasure",
    quantity: 1,
    category: "item",
    image: "https://lh3.googleusercontent.com/wPJV1d48x8lqzQiJ3b_o8Jb8rnSrEp8WXg6QcTf4uGVw3lYVgdDyu3NMf4c-ztKl7r60TEteA0EJfGJS51R2BeQQp4kQExHI9opAeiFb_C9UyFeMzvAxDEAPcr7Le6uD-2BPR-gKRREk-375SyL-a8kFi3fUUJEirYSOi_vzIClNCUQkXzukjgkoYDqFS8RpB5kEW4-zBP4smfr-bCXcO3PnmMZQgXLh1WmD0vCzjMENskxHwH5zgHKjg7wBfJJSK7nqNMHLdrr6RrbDBEBShTP-s5WD0qgvvsLF1IqtPbdvpRijYujoDY39ss3m8hUZxwej8ppkTl83jq5bUVODcNbODvfuKy97QO6UJzsw8Q2BAcPG907XEn8bTMkjwCz5doGN2JJziA6jkUAaI-4E1uXO8NZgcnBnTwnn5bpgQRqiUQUf1GsetNJamobpiknt9zzzr8Bqnh1vXbcVx1hXJ4chrBQTj73AyJRhwC8UfnmP2ufN935Vop2pVfGhN5c7BIusJUm_h2mxptWN60DKUilOQpexXKzxdWHOdY3qgQvzuFN6meUaxwSMxRNep6pjWKKdwzXN6yHMy-gbg-EhKGRXMnSYYfsXkoyhMZOTE0VF108kSWJKrO7Y8kXj1bSnBS08dV5BPv5O9VeAObiithuZLUn93h9pk2rkXTaAnML8Hz-SmVOk-uXvPjJw5_2NYi8ZU_uTAgIuKfCq7i0LTvVbEtSu7eAoGpdQbsHCFYjv_nTVvcdMAy1UOgCiXwqSPqwuRY_1PQThbZSmTbpzvKW_P_s8KLBH5KI=s1016-no?authuser=0"
  }

  const helmet = {
    name: "Helmet",
    quantity: 1,
    category: "armor",
    image: "https://lh3.googleusercontent.com/uinm4VWdW-hdckNoYJk6eQVcDYkXkRUJ3Eqq1jMnFGNluhAc7hdPKNIlh4eZBwMwlvrIp04KNzr2qEtLi7no6EgNOsunrj0RlRC8Tj5yGqTz0Q1SxIJ1TkSoI2MhOboE1Gk_2EtMh7KItHZpsLuKEhI9Y5UJvv5pb5xrabhQ5CmLYkN8nSNHc595DdLN3HabyGpzakdJKy6oobAEKBPHX_KqU38ZRRFWfEyyNJGuBDJNt0XeGB54zN-B2-oXfFb6T-P5CTbJWe-hfUVgE7VRNbLz7VK9ENTcHXcKeOBF5qrJHuHRyiNZorKtlfZ7wlo_wlmo5beoMaqaEYIa1PUvXmRaLIMxEzHZ89vqju0RcKe4NOhykkpnw4yZB4hu7h6ZR_InWEct8khUkxHwjthOG98AdkgdNHVgxUAaUyROeCp9fz85DLA1GfJXMTwaw0f8PFhranJOrEzMGgxAqvUS7copqajsU6Ce-wZ4xLEv6fhH0OwCfgeHKmTUI2KFNOmp-x6YAJsCYSdBMy_BC15tXoUh8TKRyCnHFRPX0NmPBaFkHltgbSLM-NT-tzD-1ovr2k7ooiqpfTtELqSIGMEYBIpMMjKBzKhwWAvzv0YAfi_r7s2VAUOLfWePwDe-0rGyUe2fFlzLu4BiUD2fe1eb4ZiH2UR-kgLanQID1b_oQBp2E75FBs1f9uaBJWqXy3lG6pnw0rtqJBsMc-zaa4jur4oEFmvcKI1zqmHdt7n5NWPCWDzCagamyPQ1juoMhCojsmEs3yZlBXw_MQNlbm5dSH0-RL8vO-MEJGc=s424-no?authuser=0"
  }

  const currentItems = [axe, potion, treasure, helmet] */}
  
{/* 
  function handleNameChange(e) {
    setCharacterName(e.target.value.toUpperCase())
  }

  function handleAvatarChange(e) {
    if (e.target.src === archerAvatar) {
      setCharacterAvatar(archerAvatar)
      setHealth(100)
      setStrength(35)
      setDefense(30)
      setLuck(25)
    } else if (e.target.src === mageAvatar) {
      setCharacterAvatar(mageAvatar)
      setHealth(100)
      setStrength(20)
      setDefense(25)
      setLuck(40)
    } else if (e.target.src === warriorAvatar) {
      setCharacterAvatar(warriorAvatar)
      setHealth(100)
      setStrength(100)
      setDefense(100)
      setLuck(10)
    }
  }

  function handleDecrementHealth() {
    if (health > 4)
    setHealth(health => health - 5)
  }

  function handleIncrementDefense() {
    if (defense < 96)
    setDefense(defense => defense + 5)
  }

  function handleRandomizeLuck() {
    setLuck(Math.floor(Math.random() * 100))
  } */}

  function handleWelcomeClick() {
    setCurrentPage(signup)
  }

  function handleLoginClick(e) {
    e.preventDefault()
    console.log(e.target)
  }

  function handleLoginSignupClick() {
    setCurrentPage(signup)
  }

  // function handleUsernameChange(e) {
  //   setUsername(e.target.value)
  // }

  // function handlePasswordChange(e){
  //   setPassword(e.target.value)
  // }

  function handlePasswordConfirmationChange(e){
    setPasswordConfirmation(e.target.value)
  }

  // console.log({ username })
  function handleSignupClick(signupUsername, signupPassword) {
    console.log("username before:", signupUsername)
    console.log("password before:", signupPassword)
    fetch('/users', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: signupUsername,
        password: signupPassword,
        // password_confirmation: passwordConfirmation,
      })})
      .then(res => res.json())
      // }}
      .then((data) => console.log(data))
      console.log("username after:", signupUsername)
      console.log("password after:", signupPassword)
      };
  

  function handleSignupLoginClick() {
    setCurrentPage(login)
  }

  return (
    <div>
      <Navbar user={user}/>
      {currentPage}
    </div>
  );
}

export default App;
