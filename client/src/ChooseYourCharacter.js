import React, { useEffect, useState } from "react";

function ChooseYourCharacter({ handleOnChange, handleOnClick, onCharacterConfirm, professionClick, professionSelect }) {

  const archerAvatar = "https://lh3.googleusercontent.com/JwMsZ3R2iHSBjWYQWoIgLBXe1M1rxpCxSb5nB3EuGN83peNvNWib68ydPogl-pILdIwAmk2vlXKljdbc90mWWZzj1xWvbv6UeeAv_VtR1WK_KOaKbExB_AKA2sWX2drp6FhkSYzheINFUrZHj3bczzLuqKTHImYnvCHxqp7Rq-p56o4roZT0xocrH2UtlHR-rSe9OIfl0zTNBl_nezwLvga-VxZs7IWLLq2f817YLo5eLLEmK6oypMsr8LIox8ISCO1O0g1C3WaXCxTvVLXOZjrNq7JdACOafqvTdB9H0oYDuTRxZ7fos85sPBHo8om_fHp__FPYVs2MV3aPUpRrNs7PNSIUAnmlV23uOlRcOzwJCJOoa1al54BPT8NQ2zjgSpYKCXp-jwh9YOsHpu8LgBH-S-LLhckjZqCwpG7TPQ-0HPM0Wfm0MluuITOu2TIUop-VctZhEtzxl0A_w3DOsLrolNoOyeFyKFwYEnVa-oeybiRIXp9Fgrkj3ftlj6NqZxzpgc0WcFTy-_xSU-Uu9Xq_7uqlb0g9M3gTD8DrKeoNsvXNJ_cQkqEzZEBFxWjwIyQAx8xQ555pUszC_7o0PSM9kQ_kmubYHEhQsEF9LgxwtxvDTIk_hGIUfinJkvr_RrujwteauGSJU33O3uQUX4UWDthZiyNK3ioCsutCy73qObbXxf6zspp3y41sL7AMulA3Nc8_5xHftSOTsCzdNJR4WxO0PTPazIEkXtQn_BdGuR2JTI-u4GKi1vHDWZ9RuQfUhksnoKV8xMTBjQOCIs1IpO1aF_ynUjeBenc5wKVb9TafECxU4SYtO2jzrfF8C2zL-A=s180-no?authuser=0"
  const mageAvatar = "https://lh3.googleusercontent.com/upyKddKTFef-o9FxU1MVitOJUaqM6-e_0xSANYm8bE-P5AyN6VuQkQdLy1Zr7NV7s9VXh7lgCsZ2AYQVrBOkx3MUJX8IkzzK_sXWEBDZyyXJ2zYMzt_L0V6A0JVh7okkcsXJNvijt5kzLuz0ofEFlWvV5T7IXKDDhdzcbaI28Zq0PmCSVEbqJjf36onc9b5nRTZbKBDnjjffNMNRF_oV-cuzqBGDHVTcjMTCkxT1LwIstR8jS3T9t-vxMSbOmLExeqDnrI1XkBEl1V-vrWRG29GF-3iiTuQTGx8pvn2i1nbOqB_fcmuvzg6o3lsTiwik2JuDaiOEfLrThX74hAYGw5NBG_mUt4Hy7camFQXv4qLifvVVvPEbNrkZ0NUbdh4jjULPqfWIB-pXW0KRzb4fAb2wKYloZzxD9-kG20gtA8IA_L-1eEJmfQcAYm-PtUQf3AlPOyHzSdG-TJ1HsaXsrH-_-KjAKLuUWZHrCfyS8jWrhFl89MWAxcFfYam1G-_MbOl-9d4ncM5ZnX4zkXXhWUZ8RcgF8X7FJk0-ouASDKM78mUAO1tO37nr0eXd2scvChpJG_HlG8ZL0-83aoPZD1cfHm_dh1JMXe-eqaFHo2hCGzrM9uWr0X7jxI_3HlcJBwkwI_Ko1K2NIlzcE8L7gUl1GA6Kyzw3QL3a7uVNPosA1xroScGQSx2bj5ajH18LRIAFNwlHwfM6ngl1O3xOOmlKWMpfGsRsrQQ-bb8n6lOycnLvlOaez0jZCphL8tU5xNR0vmkzoc_YGoeGrmNjLUaAO5c1gXdHisShiAygecDEHVxmAZN48f5ky_5JuLpHAT9f-w=s180-no?authuser=0"
  const warriorAvatar = "https://lh3.googleusercontent.com/h8gX2Igm9NEPpK_ecVD0s_W4KrTQgkbuHldBunWmhD3HJ2AQTCHb97ZoXmVORBDMMijaoWdu9-v1rCHvDcRZUH19zgpqJEE_68hht0ZId46mPivakIjemfcydBuTGdrkxilhRZigxwzLeFzssSc4rR-lkiLrOPoTRM90Kb3sazys7ZCjHMWi8uApIHPHSEBkVd8CYYG3oW0SPOFXwqX_WWyCCnGBzsvbHYNAfgMXF7xLN7z-1eJffdjtr1_yN1PhA46on3iTyLsjX4tgnKWqF_W8G_js0QTGnGOqLmYhwcSWGsiuRnl5uKNLg94AYCbq5VfsyO2L-OjJtU0ZNaSqepE69vy81ut9CK5cjcbtp19Ccq_s4i1PU36rwLjq1fhv4e7s_yL3WDF4l-sD6Kb7D9SsMhSp3pwntRJL0dwSTtgZXs7UEMQ47uE7A6rTIp9xE5yVKt6t3O1OFDJ_Oq1SRfEc6mWLj_EuFKUBa39D7aMwBhtUNtyX46vmWUmFA9L2235x3qx-8MtlNJyViUR66GgePehYLiQWoxtmS_yNkNMzsrKpEAC-xNxu5GIxh27aBm5rYxpIAsFJEklEwZ4UZlz-QWwNiuC94jtvQja-1INmWIab39GAPVi2RcPtPOWbMk2YxO2d4FbJU9GQ5xWaLoTA3A6nMrOJV0sdutGL6KHlKh59E5mKR3HUQbU1ElTAIWCZJkQ6IM8QDUdCXcdGCzoBTN_sOwWsBxsONAGtnJiDHOWDX8TTPiZBRTmQbKyyugmFH-_lLsRA7P1QhM_hQk9bnMR8VIUHSwhhMoSQqCB3sY7rAe7fwulsVa94H1l2QdZeUg=s180-no?authuser=0"
  
  return (
    <div className="gameArea">
      <h2>Choose Your Character</h2>
      <h3>ENTER NAME BELOW</h3>
        <input
        type="text" 
        placeholder="Enter Name Here..." 
        className="textInput"
        onChange={handleOnChange} >
        </input>
          <br></br>
          <h3>CHOOSE YOUR AVATAR</h3>
        <div className="center">
          <div className="chooseYourAvatarContainer">
            <img className="chooseYourAvatarImg" onClick={handleOnClick} src={warriorAvatar}></img>
          </div>
          <div className="chooseYourAvatarContainer">
            <img className="chooseYourAvatarImg" onClick={handleOnClick} src={archerAvatar}></img>
          </div>
          <div className="chooseYourAvatarContainer">
            <img className="chooseYourAvatarImg" onClick={handleOnClick} src={mageAvatar}></img>
          </div>
        </div>
        <br></br>
        <h3>CHOOSE YOUR PROFESSION</h3>
        <div className="container">
          <label className="checkmark">ONE
          <input type="radio" name="profession"></input>
          </label>
          <label className="checkmark">TWO
          <input type="radio" name="profession"></input>
          </label>
          <label className="checkmark">THREE
          <input type="radio" name="profession"></input>
          </label>
        </div>
        <div className="center">
            <button className="normalButton" onClick={onCharacterConfirm}>Confirm your Character</button>
        </div>
    </div>
  )
};

export default ChooseYourCharacter;