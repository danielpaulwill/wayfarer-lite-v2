import React, { useState } from "react";
import ItemsList from "./ItemsList";

function ItemsSidebar() {
  const [currentItems, setCurrentItems] = useState([
    {
      name: "Axe",
      quantity: 1,
      category: "weapon",
      image: "https://lh3.googleusercontent.com/uOFo1VAumsc7OfxEdYDXwzjYkHE5QMTbNEYePk01jCwBLOyKNiuUXJ-PdS7kS9_kwdV5rBvGrdDiG2IYEH9DIANflymGUOf9Lj4N4UeuFLwznqjMubCL0M87q5T8JR6Xp8LON7qNfW5AslXlJUUhypeEYjYnmZVSLFSIJD2tB6bCNTIUJ8yWhPpx5otsNeOKQUM-jpBXZXC-LarHmQYetAMTMcRW-O7s8PbukySgvjEgYveKXZvpxKBp8rzlHlGKwK5uREjv5uN7wr0MIsWCgsrLAeGS6eBy3TZUh3fxu2_Yw6sOHswSi3Fg_na5Od7Q1MrNHR_yF6ZwCWb7FxXWOZQjNX6YanpiwQ7t_juT0rUFL43GMMI7I2CSO0AkEAqKP1QOUL2i0SMo-wkMuYHJHi5xu1TiWeBOAR075RRLDeTPxDrmUGNZDQDzdYLG9OWHYlRp6JEvoLjcUCJ6gjv0Gq540G0wzcXbjoSwk_GwJrKLEsJBoFlcu4AhenbX7aADyd7kyBJwqd4ezO1fVdxdYjjel4hrPn4NzXn_kpA27p_HILjo1gQRDKPEtFQEyWxbVE-WhT35q3ouBWN1nUBoDWsywPPTK3NlDALN_cP45HBBtomKJ8PPygEIdUqELaIiJOG8rw2xIZrHIG7X1kxRRcAt9B1r0B__kqNYvu3ywUc4Sb1hBnZpnBiauZNKMygRjE1L6pFrsYgOm5Cpsu-iWK3_jDUvpoylSOleL2w12yKhW9q4wWLVn2aLidaquj0qjnPjh5btn51dTGjFuVDebnTNdx_rS-ebSjE=w462-h456-no?authuser=0"
    },
    {
      name: "Potion",
      quantity: 3,
      category: "item",
      description: "Potions are a one-use item. Some potions can heal your health, others can replenish your magic. Some have lasting effects, others have momentary boosts to your stats.",
      image: "https://lh3.googleusercontent.com/wdOoItFjbjKFUCeASwqOB1_1w1AJA2Qpwyr3Y45GHp1VAVI3Omc0QaNZ1atcTvDlUu-sBefuCAL_0gGju5os5sCzlqVBMo4OekAGhH7Mk2XDIF1kh4MRn0p9C8anTEB4_C9evNAe29uekoUw3BB2XnSWxLSU6TPlJ57uaoSJnwNJ0Kih3BaQ6Rxd0ucWPVSMw8MbSBGSqWSERUlB5f4FWN-jcC-tn8OoOrq0ESKPw4WZYteY-ABQY9zVOfNrB9TKLrX8smWrVQEnDlKNhWk8mnGH_Hpf2QVtv2rOReO8VAO-ZMLQ-tdyYorJ-y8PUSMmggEr4LCbEHtKYdnebDvU3suuurQpBabtYWKLTHFP_f3t6RgROz4S7jgG5a560iOA8bgTZR6RXGHSbQyAn4gmsuC34eLLq_Y7XaJ6kocyeYTvdFW1zK7hqdyJxayPkXtYvHs5nZDWyL96yIu98mlofXUFa1Cclb_1w8-3tTJFch52tW2wJoQdYEf0DkR_vTFT4oswHVn7a8FkHVInLv-chOOvtPJ4xAekpZ5fZ-8KTRqYboNwU0duk_QbE4hB3ikjuOl7fDHwZfwyppx5N8Ywk7IjEXKGlEVUPuyTX1V7KgD_KTFlt3lkjW_lvSqyybP7wDhOBJSZhLilkBgm7viFmJ6F2YIzC_inmL7vuMNjDPohCd4S1uTcWHbgl2kF5gmt_F-Gy9aLB6bWcJ3h3LeWXzmnq9qY-L0_2qMw6LpAHC2KSIvf-DBpECevsCjPGuPoA12pcyMbkjqsdDRUSBq_-Q9Cg7WVJUF0aNgTVyLDz7ac1MaTs8NhJcs7X7HTJ6dKCnS9kw=s296-no?authuser=0"
    },
    {
      name: "Treasure",
      quantity: 1,
      category: "item",
      image: "https://lh3.googleusercontent.com/wPJV1d48x8lqzQiJ3b_o8Jb8rnSrEp8WXg6QcTf4uGVw3lYVgdDyu3NMf4c-ztKl7r60TEteA0EJfGJS51R2BeQQp4kQExHI9opAeiFb_C9UyFeMzvAxDEAPcr7Le6uD-2BPR-gKRREk-375SyL-a8kFi3fUUJEirYSOi_vzIClNCUQkXzukjgkoYDqFS8RpB5kEW4-zBP4smfr-bCXcO3PnmMZQgXLh1WmD0vCzjMENskxHwH5zgHKjg7wBfJJSK7nqNMHLdrr6RrbDBEBShTP-s5WD0qgvvsLF1IqtPbdvpRijYujoDY39ss3m8hUZxwej8ppkTl83jq5bUVODcNbODvfuKy97QO6UJzsw8Q2BAcPG907XEn8bTMkjwCz5doGN2JJziA6jkUAaI-4E1uXO8NZgcnBnTwnn5bpgQRqiUQUf1GsetNJamobpiknt9zzzr8Bqnh1vXbcVx1hXJ4chrBQTj73AyJRhwC8UfnmP2ufN935Vop2pVfGhN5c7BIusJUm_h2mxptWN60DKUilOQpexXKzxdWHOdY3qgQvzuFN6meUaxwSMxRNep6pjWKKdwzXN6yHMy-gbg-EhKGRXMnSYYfsXkoyhMZOTE0VF108kSWJKrO7Y8kXj1bSnBS08dV5BPv5O9VeAObiithuZLUn93h9pk2rkXTaAnML8Hz-SmVOk-uXvPjJw5_2NYi8ZU_uTAgIuKfCq7i0LTvVbEtSu7eAoGpdQbsHCFYjv_nTVvcdMAy1UOgCiXwqSPqwuRY_1PQThbZSmTbpzvKW_P_s8KLBH5KI=s1016-no?authuser=0"
    },
    {
      name: "Helmet",
      quantity: 1,
      category: "armor",
      image: "https://lh3.googleusercontent.com/uinm4VWdW-hdckNoYJk6eQVcDYkXkRUJ3Eqq1jMnFGNluhAc7hdPKNIlh4eZBwMwlvrIp04KNzr2qEtLi7no6EgNOsunrj0RlRC8Tj5yGqTz0Q1SxIJ1TkSoI2MhOboE1Gk_2EtMh7KItHZpsLuKEhI9Y5UJvv5pb5xrabhQ5CmLYkN8nSNHc595DdLN3HabyGpzakdJKy6oobAEKBPHX_KqU38ZRRFWfEyyNJGuBDJNt0XeGB54zN-B2-oXfFb6T-P5CTbJWe-hfUVgE7VRNbLz7VK9ENTcHXcKeOBF5qrJHuHRyiNZorKtlfZ7wlo_wlmo5beoMaqaEYIa1PUvXmRaLIMxEzHZ89vqju0RcKe4NOhykkpnw4yZB4hu7h6ZR_InWEct8khUkxHwjthOG98AdkgdNHVgxUAaUyROeCp9fz85DLA1GfJXMTwaw0f8PFhranJOrEzMGgxAqvUS7copqajsU6Ce-wZ4xLEv6fhH0OwCfgeHKmTUI2KFNOmp-x6YAJsCYSdBMy_BC15tXoUh8TKRyCnHFRPX0NmPBaFkHltgbSLM-NT-tzD-1ovr2k7ooiqpfTtELqSIGMEYBIpMMjKBzKhwWAvzv0YAfi_r7s2VAUOLfWePwDe-0rGyUe2fFlzLu4BiUD2fe1eb4ZiH2UR-kgLanQID1b_oQBp2E75FBs1f9uaBJWqXy3lG6pnw0rtqJBsMc-zaa4jur4oEFmvcKI1zqmHdt7n5NWPCWDzCagamyPQ1juoMhCojsmEs3yZlBXw_MQNlbm5dSH0-RL8vO-MEJGc=s424-no?authuser=0"
    }
  ])

  const items = currentItems.map(item => (
    <ItemsList key={item.name} item={item}/>
    ))

  return (
    <div id="itemsSidebar">
      <div id="itemsSidebarContent">
        <h3>Items</h3>
        {items}
        <p>The above items are placeholders.</p>
        <p>This space will hold your characters items in a future version of the game.</p>
      </div>
    </div>
  )
};

export default ItemsSidebar;