import React, { useState } from "react";
import "./Home.css";
import Header from "../Header/Header";
import ProfilePicture from "../Spring/Home/ProfilePicture";
import ColoradoMap from "../Spring/Home/ColoradoMap";
import BoulderMapEditTrans from "../Images/BoulderMapEditTrans.png";
import ProfileClick from "./ProfileClick";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  const [picture, setPicture] = useState(false);

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
              <p>I'm a Frontend React Developer from Boulder, Colorado.</p>
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
              <a
                href="https://www.google.com/maps/place/Boulder,+CO/@40.0293703,-105.2750826,13z/data=!3m1!4b1!4m5!3m4!1s0x876b8d4e278dafd3:0xc8393b7ca01b8058!8m2!3d40.0149856!4d-105.2705456"
                target="_blank"
              >
                <ColoradoMap />
              </a>
            </div>
          </div>
          <div className={sidebar ? "origin" : "origin"}>
            <div>
              <body>
                {/* <span content="H">H</span>
              <span content="o">o</span>
              <span content="m">m</span>
              <span content="e">e</span> */}
              </body>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
