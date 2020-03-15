
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Power4 } from "gsap/gsap-core";

gsap.registerPlugin(CSSRulePlugin);

function Hero(props) {
  var filterStyle = {
    height: 0,
    opacity: 0,
    visibility: "hidden",
    display: "none"
  };
  useEffect(() => {
    let tl = gsap.timeline();

    tl.to(CSSRulePlugin.getRule("::after"), 1.5, { width: "100%", ease: Power4.easeInOut });
    tl.to(".nameContainer", 1, { y: 0, ease: Power4.easeOut}, "-=0.8");
    tl.to(".contactLinks div", 1, { y: 0, ease: Power4.easeOut }, "-=1");
    
    // LIQUIFY EFFECT
    if (window.innerWidth < '767') {
      tl.to(".js-liquify-trigger", 1, { opacity: 1, y: 1, ease: Power4.easeOut}, '-=0.5');
      tl.to(".cities", 1, { y: 0, ease: Power4.easeOut}, "-=1");
    } else {
      tl.to(".js-liquify-trigger", 2.5, { opacity: 1, y: 1, delay: 1}, "-=1");
      tl.to("#liquid", 3, { attr: { scale: "0" } }, "-=3");
      tl.to(".cities", 1, { y: 0, ease: Power4.easeOut}, "-=2");
    }


    //UI ANIMS

    // gsap.to( CSSRulePlugin.getRule("::before"), {duration: 3, cssRule: {color: "blue"}});>
  }, []);


  return (
      <div className="Hero">
        <div className="header">
          <div>
            <div className="nameContainer">
              <h1>LEO GENERET</h1>
            </div>
          </div>
          <div className="colorToggle" onClick={props.bgSwitch}></div>
        </div>
        <div className="centralSection js-liquify-trigger">
          <p className="firstline">Léo<span>-Paul</span> Generet ↓</p>
          <p className="secondline">Web&shy;developer</p>
          <p className="thirdline">in apprentice&shy;ship at,</p>
          <p className="fourthline">Ultra&shy;noir</p>

          <svg style={filterStyle}>
            <filter id="liquify">
              <feTurbulence
                baseFrequency="0.015"
                numOctaves="3"
                result="warp"
                type="fractalNoise"
              ></feTurbulence>
              <feDisplacementMap
                id="liquid"
                in="SourceGraphic"
                in2="warp"
                scale="300"
                xChannelSelector="R"
                yChannelSelector="B"
              ></feDisplacementMap>
            </filter>
          </svg>
        </div>
        <div className="footer">
          <div className="contactLinks">
            <div>
              <a
                href="mailto:lpgeneret@gmail.com"
                target="_blank"
                className="links"
                rel="noopener noreferrer"
              >
                EMAIL&nbsp;↗
              </a>
              <a
                href="https://www.linkedin.com/in/lpgeneret/"
                target="_blank"
                className="links"
                rel="noopener noreferrer"
              >
                LINKEDIN&nbsp;↗
              </a>
              <a
                href="https://www.instagram.com/lpgeneret"
                target="_blank"
                className="links"
                rel="noopener noreferrer"
              >
                INSTAGRAM&nbsp;↗
              </a>
            </div>
          </div>
          <div className="cities">
            <p>MONTREAL</p>
            <p>PARIS XI</p>
          </div>
        </div>
      </div>

  );
}

export default Hero;