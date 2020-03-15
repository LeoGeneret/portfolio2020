import React, { useState } from "react";
import "./scss/App.scss";
import Hero from "./shared/Hero";
import Projects from "./shared/Projects";
// import "grained";  

function App() {
  const [altBg, setAltBg] = useState(false);

  function handleCustomCursor(e) {
    const customCursor = document.querySelector(".customCursor");
    const magnifier = document.querySelector(".magnifier");
    customCursor.setAttribute(
      "style",
      "top: calc(" + e.pageY + "px); left: calc(" + e.pageX + "px);"
    );
    magnifier.setAttribute(
      "style",
      "top: calc(" +
        e.pageY +
        "px - 30px); left: calc(" +
        e.pageX +
        "px - 30px);"
    );
  }

  function handleBgSwitch() {
    const blueBg = document.querySelector(".bg");

    altBg
      ? blueBg.setAttribute("style", "opacity : 0;")
      : blueBg.setAttribute("style", "opacity : 1;");
    setAltBg(!altBg);
  }
  return (
    <div className="App" onMouseMove={handleCustomCursor}>
      <div className="customCursor"></div>  
      <div className="magnifier"></div>
      <div className="bg"></div>

      <Hero bgSwitch={handleBgSwitch} />
      <Projects />
    </div>
  );
}

export default App;
