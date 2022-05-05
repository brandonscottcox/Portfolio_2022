import React, { useState } from "react";
import "../Scrollbar.css";
import "./Home.css";
import Header from "../Header/Header";
import ProfilePicture from "../Spring/Home/ProfilePicture";
import Skills from "../Spring/Home/Skills/Skills.js";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  const [picture, setPicture] = useState(false);

  const [open, set] = useState(false);

  const showPicture = () => setPicture(!picture);

  return (
    <>
      <div className="border" id="home">
        <div>
          <Header sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <div className={sidebar ? "darken" : "bright"}>
          <div className={sidebar ? "moveImg" : "originImg"}>
            <div className="profileInline">
              <div className="ProfileImg">
                <div className="ProfilePosition">
                  <div className={picture ? "movePic" : "originPic"}>
                    <div onClick={showPicture}>
                      <ProfilePicture />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={open ? "moveHome" : "HomeBackground"}>
              <div>
                <div className="IntroductionText">
                  <div>
                    <h1>Brandon Cox</h1>
                    <div>
                      <p>I'm a Frontend Developer from Boulder, Colorado.</p>
                      <p>I specialize in JavaScript and React development</p>
                      <p>and have a passion for creating/designing </p>
                      <p>frontend applications.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Slider />
                </div>
                <div className="SkillsText">
                  <h1>Interested in my skills?</h1>
                </div>
                <div className="SkillsAnim">
                  <Skills open={open} set={set} />
                </div>
              </div>
            </div>
          </div>
          <div className={sidebar ? "movePages" : "originPages"}>
            <div className="SnapScroll">
              <About />
              <Contact />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
