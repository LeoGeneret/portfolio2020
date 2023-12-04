import React, { useState, useContext } from "react";
import "./scss/App.scss";
import Hero from "./shared/Hero";
import Projects from "./shared/Projects";

import { set } from "gsap";

function App() {
    const [altBg, setAltBg] = useState(false);
    const [projectTransDone, setProjectTransDone] = useState(false);
    const value = { projectTransDone, setProjectTransDone };
    const [videoSRC, setVideoSRC] = useState('')

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

    function onScrollHandler() {
        setProjectTransDone(true)
    }

    const handleParisVideo = () => {
        // setVideoSRC('/paris.mp4');
    }

    const handleMtlVideo = () => {
        // setVideoSRC('/montreal.mp4');
    }

    const handleResetVideo = () => {
        // setVideoSRC('');
    }

    function handleBgSwitch() {
        const blueBg = document.querySelector(".bg");

        altBg
            ? blueBg.setAttribute("style", "opacity : 0;")
            : blueBg.setAttribute("style", "opacity : 1;");
        setAltBg(!altBg);
    }
    return (
        <div
            className="App"
            // onMouseMove={handleCustomCursor}
            // onWheel={onScrollHandler}
        >
            <>
                {/* <div className="customCursor"></div> */}
                <div className="magnifier"></div>
                <div className="bg"></div>

                <Hero bgSwitch={handleBgSwitch} mtlVideo={() => handleMtlVideo()} parisVideo={() => handleParisVideo()} resetVideo={() => handleResetVideo()} />
                {/* <video id="videoBG" src={videoSRC} autoPlay muted loop /> */}
                {/* {projectTransDone &&  */}
                <Projects />
                {/* } */}
            </>
        </div>
    );
}

export default App;
