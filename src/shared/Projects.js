import React, { createRef, useEffect } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Power4 } from "gsap/gsap-core";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

gsap.registerPlugin(CSSRulePlugin);
ScrollMagicPluginGsap(ScrollMagic, gsap);

function Projects() {
  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    var tl = new gsap.timeline();
    tl.fromTo(".one", 1, { x: "-110%" }, { x: "-10%" }); // in from left
    tl.fromTo(".two", 1, { x: "110%" }, { x: "-10%" }, '-=1'); // in from left
    tl.fromTo(".three", 1, { x: "-110%" }, { x: "-10%"}, '-=0.8'); // in from left
    tl.fromTo(".four", 1, { x: "110%" }, { x: "-10%" }, '-=1'); // in from left
    // tl.fromTo(".bandsContainer", 1, { backgroundColor: 'transparent' }, { backgroundColor: 'white' }); // in from left
    tl.fromTo(".one p ", 1, { color: 'black' }, { color: 'white' }, '-=0.8'); // in from left
    tl.fromTo(".two p", 1, { color: 'black' }, { color: 'white' }, '-=0.8'); // in from left
    tl.fromTo(".three p", 1, { color: 'black' }, { color: 'white' }, '-=0.8'); // in from left
    tl.fromTo(".four p", 1, { color: 'black' }, { color: 'white' }, '-=0.8'); // in from left

    new ScrollMagic.Scene({
      triggerElement: "#Projects",
      triggerHook: "onLeave",
      duration: "300%"
    })
      .setPin("#Projects")
      .setTween(tl)
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  });

  return (
    <div id="Projects">
      <div className="bandsContainer">
        <div className="band one">
          <p>PROJECTS↓PROJECTS↓PROJECTS</p>
        </div>
        <div className="band two">
          <p>PROJECTS↓PROJECTS</p>
        </div>
        <div className="band three">
          <p>PROJECTS↓PROJECTS↓PROJECTS</p>
        </div>
        <div className="band four">
          <p>PROJECTS↓PROJECTS</p>
        </div>
        {/* <div className="band five">
          <p>PROJECTS PROJECTS</p>
        </div>
        <div className="band six">
          <p>PROJECTS PROJECTS</p>
        </div>
        <div className="band seven">
          <p>PROJECTS PROJECTS</p>
        </div>
        <div className="band ">
          <p>PROJECTS PROJECTS</p>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
