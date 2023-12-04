import React, { useEffect, useContext } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Power4 } from "gsap/gsap-core";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

gsap.registerPlugin(CSSRulePlugin);
ScrollMagicPluginGsap(ScrollMagic, gsap);

function Projects() {
  useEffect(() => {
    var controller = new ScrollMagic.Controller();
    var tl = new gsap.timeline();

    tl.fromTo(".one", 1, { x: "-110%" }, { x: "-10%" }); // in from left
    tl.fromTo(".two", 1, { x: "110%" }, { x: "-10%" }, "-=1"); // in from left
    tl.fromTo(".three", 1, { x: "-110%" }, { x: "-10%" }, "-=0.8"); // in from left
    tl.fromTo(".four", 1, { x: "110%" }, { x: "-10%" }, "-=1"); // in from left
    tl.fromTo(".five", 1, { x: "-110%" }, { x: "-10%" }, "-=0.8"); // in from left
    tl.fromTo(".six", 1, { x: "110%" }, { x: "-10%" }, "-=1"); // in from left
    tl.fromTo(".seven", 1, { x: "-110%" }, { x: "-10%" }, "-=0.8"); // in from left
    tl.fromTo(".eight", 1, { x: "110%" }, { x: "-10%" }, "-=1"); // in from left
    tl.fromTo(
        "#Projects",
        0.1,
        { backgroundColor: "transparent" },
        { backgroundColor: "black" },
        "-=0.3"
    ); // in from left
    // tl.to("#Projects" , 0.1, { backgroundColor: 'white' }, '-=0.3');

    tl.fromTo(
        ".bandContent",
        0.5,
        { backgroundColor: "white" },
        { backgroundColor: "black" }
    ); // in from left

    // tl.fromTo(
    //   ".one > .bandContent",
    //   0.5,
    //   { color: "black" },
    //   { color: "white" }
    // ); // in from left
    // tl.fromTo(".two > .bandContent", 0.5, { color: "black" }, { color: "white" }); // in from left
    // tl.fromTo(
    //   ".three > .bandContent",
    //   0.5,
    //   { color: "black" },
    //   { color: "white" }
    // ); // in from left
    // tl.fromTo(
    //   ".four > .bandContent",
    //   0.5,
    //   { color: "black" },
    //   { color: "white" }
    // ); // in from left
    // tl.fromTo(
    //   ".five > .bandContent",
    //   0.5,
    //   { color: "black" },
    //   { color: "white" }
    // ); // in from left
    // tl.fromTo(".six > .bandContent", 0.5, { color: "black" }, { color: "white" }, "-=0.2"); // in from left
    // tl.fromTo(
    //   ".seven > .bandContent",
    //   0.5,
    //   { color: "black" },
    //   { color: "white" }
    // ); // in from left
    // tl.fromTo(
    //   ".eight > .bandContent",
    //   0.5,
    //   { color: "black" },
    //   { color: "white" }
    // ); // in from left

    tl.fromTo(".band", 0.1, { display: "block" }, { display: "none" });
    tl.fromTo(
        "#Projects",
        0.1,
        { pointerEvents: "none" },
        { pointerEvents: "all" }
    );
    tl.fromTo(".projectsSection", 1.5, { opacity: 0 }, { opacity: 1 }); // in from left
    tl.fromTo(
        ".projectsSection",
        0.1,
        { position: "absolute" },
        { position: "fixed" },
        "-=1"
    ); // in from left

    const projecttransi = new ScrollMagic.Scene({
      triggerElement: "#Projects",
      triggerHook: "onLeave",
      duration: "300%",
    })
        .setPin("#Projects")
        .setTween(tl)
        // .addIndicators()
        .addTo(controller);

    var lol = document.querySelector(".lineone");
    // document.querySelector('.project-one').style.('4px')
    // $('#maindiv').width($('#div1').width());
  }, []);

  return (
      <div id="Projects">
        <div className="bandsContainer">
          <div className="band one">
            <div className="bandContent">
              <p>SELECTED WORK</p>
              <span>&nbsp;③ →&nbsp;</span>
              <p>SELECTED WORK </p>
              <span>&nbsp;③ →&nbsp;</span>
            </div>
          </div>
          <div className="band two">
            <div className="bandContent">
              <p>WORK</p>
              <span>&nbsp;③ →&nbsp;</span>
              <p>SELECTED WORK</p>
              <span>&nbsp;③ →&nbsp;</span>
              <p>SELECTED WORK </p>
              <span>&nbsp;③ →&nbsp;</span>
            </div>
          </div>
          <div className="band three">
            <div className="bandContent">
              <span>&nbsp;③ →&nbsp;</span>
              <p>SELECTED WORK</p>
              <span>&nbsp;③ →&nbsp;</span>
              <p>SELECTED WORK</p>
              <span>&nbsp;③ →&nbsp;</span>
              <p>SELECTED WORK</p>
            </div>
          </div>
          <div className="band four">
            <div className="bandContent">
              <p>SELECTED WORK</p>
              <span>&nbsp;③ →&nbsp;</span>
              <p>SELECTED WORK </p>
              <span>&nbsp;③ →&nbsp;</span>
            </div>
          </div>
          <div className="band five">
            <div className="bandContent">
              <p>WORK</p>
              <span>&nbsp;③ →&nbsp;</span>
              <p>SELECTED WORK</p>
              <span>&nbsp;③ →&nbsp;</span>
              <p>SELECTED WORK </p>
              <span>&nbsp;③ →&nbsp;</span>
            </div>
          </div>
          <div className="band six">
            <div className="bandContent">
              <span>&nbsp;③ →&nbsp;</span>
              <p>SELECTED WORK</p>
              <span>&nbsp;③ →&nbsp;</span>
              <p>SELECTED WORK</p>
              <span>&nbsp;③ →&nbsp;</span>
              <p>SELECTED WORK</p>
            </div>
          </div>
          <div className="band seven">
            <div className="bandContent">
              <p>SELECTED WORK</p>
              <span>&nbsp;③ →&nbsp;</span>
              <p>SELECTED WORK </p>
              <span>&nbsp;③ →&nbsp;</span>
            </div>
          </div>
          <div className="band eight">
            <div className="bandContent">
              <p>WORK</p>
              <span>&nbsp;③ →&nbsp;</span>
              <p>SELECTED WORK</p>
              <span>&nbsp;③ →&nbsp;</span>
              <p>SELECTED WORK </p>
              <span>&nbsp;③ →&nbsp;</span>
            </div>
          </div>
        </div>

        {/* <div className="projectsSection">
        <div className="header">
          <p>SELECTED PROJECTS</p>
          <p className="years">18 - 20</p>
        </div>
        <div className="projectsList">
          <a href="facebook.com" className="project pj-one">
            <Ticker
              direction="toLeft"
              speed={15}
            >
              {(index) => <h1>COVID19 MAP - COVID19 MAP - </h1>}
            </Ticker>
          </a>
          <div className="project pj-two">
          <Ticker
              direction="toRight"
              speed={10}
            >
              {(index) => <h1>ALCHIMATE - ALCHIMATE - </h1>}
            </Ticker>
          </div>
          <div className="project pj-three">
          <Ticker
              direction="toLeft"
              speed={20}
            >
              {(index) => <h1>VALHALLA NIGHT FEVER - VALHALLA NIGHT FEVER -</h1>}
            </Ticker>
          </div>
          <div className="project pj-one">
            <Ticker
              direction="toRight"
              speed={25}
            >
              {(index) => <h1>DIOR MINI WELCOME WEBSITE</h1>}
            </Ticker>
          </div>
          <div className="project pj-two">
          <Ticker
              direction="toLeft"
              speed={15}
            >
              {(index) => <h1>ALCHIMATE</h1>}
            </Ticker>
          </div>
          <div className="project pj-three">
          <Ticker
              direction="toRight"
              speed={10}
            >
              {(index) => <h1>VALHALLA NIGHT FEVER</h1>}
            </Ticker>
          </div>
        </div>
      </div> */}
        <div className="projectsSection">
          <div className="header">
            <p>SELECTED PROJECTS</p>
            <p className="years">19 - 22</p>
          </div>
          <div className="projectsList">
            <a href="https://github.com/LeoGeneret/Valhalla-NightFever-dec2018" target="_blank" rel="noopener noreferrer">
              <div className="project">
                <p className="number">❶</p>
                <div className="projectInfos">
                  <h2>VALHALLA NIGHT FEVER</h2>
                  <p className="details">UNITY GAME - 2019</p>
                </div>
              </div>
            </a>
            <a
                href="https://gucciflorapurikura.com/fr/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <div className="project">
                <p className="number">❷</p>
                <div className="projectInfos">
                  <h2>GUCCI FLORA PURIKURA</h2>
                  <p className="details">MOBILE EXPERIENCE - 2021</p>
                </div>
              </div>
            </a>
            <a href="http://covidmap.leogeneret.fr" target="_blank" rel="noopener noreferrer">
              <div className="project">
                <p className="number">❸</p>
                <div className="projectInfos">
                  <h2>COVID-19 DATABOARD</h2>
                  <p className="details">WEBSITE - 2020</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* <div className="aboutSection">
        <h1>Work in progress</h1>
      </div> */}
      </div>
  );
}

export default Projects;
