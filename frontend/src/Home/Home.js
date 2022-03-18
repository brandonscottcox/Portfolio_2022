import React, { useState } from "react";
import "../Scrollbar.css";
import "./Home.css";
import Header from "../Header/Header";
import ProfilePicture from "../Spring/Home/ProfilePicture";
import ColoradoMap from "../Spring/Home/ColoradoMap";
import Skills from "../Spring/Home/Skills/Skills.js";
import Soundcloud from "../Images/SoundcloudTrans.png";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  const [picture, setPicture] = useState(false);

  const [open, set] = useState(false);

  const showPicture = () => setPicture(!picture);

  return (
    <>
      <div>
        <Header sidebar={sidebar} setSidebar={setSidebar} />
      </div>
      <div className="HomeBackground">
        <div className={sidebar ? "moveImg" : "originImg"}>
          <div className="IntroductionText">
            <div>
              <h1>Brandon Cox</h1>
              <div className="p">
                <p>I'm a Frontend Developer from Boulder, Colorado.</p>
                <p>I specialize in JavaScript and React development</p>
                <p>and have a passion for creating/designing </p>
                <p>Frontend Applications.</p>
              </div>
            </div>
          </div>

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
          <div className="mapImg">
            <div className="mapPosition">
              <ColoradoMap />
            </div>
          </div>
          <div className="MapText">
            <p>-Boulder, CO</p>
          </div>
          <div className={sidebar ? "origin" : "origin"}>
            <div className="Music">
              <p>I also make music</p>
              <img src={Soundcloud} />
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
    </>
  );
}
