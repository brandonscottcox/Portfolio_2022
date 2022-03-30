import React, { useState } from "react";
import "../Scrollbar.css";
import "./Home.css";
import Header from "../Header/Header";
import ProfilePicture from "../Spring/Home/ProfilePicture";
import ColoradoMap from "../Spring/Home/ColoradoMap";
import Skills from "../Spring/Home/Skills/Skills.js";
import Song from "../Howler/Song";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function Home({ musicOn, setMusicOn }) {
  const [sidebar, setSidebar] = useState(false);

  const [picture, setPicture] = useState(false);

  const [open, set] = useState(false);

  const showPicture = () => setPicture(!picture);

  return (
    <>
      <div className="border" id="home">
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
          <div>
            <Header sidebar={sidebar} setSidebar={setSidebar} />
          </div>
          <div className="HomeBackground">
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

            <div className="mapImg">
              <div className="mapPosition">
                <ColoradoMap />
              </div>
            </div>
            <div className="MapText">
              <p>-Boulder, CO</p>
            </div>
            <div className="SkillsText">
              <h1>Interested in my skills?</h1>
            </div>
            <div className="SkillsAnim">
              <Skills open={open} set={set} />
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
    </>
  );
}
