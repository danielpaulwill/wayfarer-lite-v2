import React, { useEffect } from "react";

function LoadingPage({ location, locationWorkaround }) {

  useEffect(() => {
    setTimeout(function(){
      locationWorkaround()
      console.log("loaded")
      }, 1000);    
  }, [])

  
  return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
  )
};

export default LoadingPage;