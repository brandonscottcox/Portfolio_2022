import React, { useState } from "react";
import "./Home.css";
import Header from "../Header/Header";
import ProfilePicture from "../Spring/Home/ProfilePicture";
import BoulderMapEditTrans from "../Images/BoulderMapEditTrans.png"

export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
    <div>
        <Header sidebar={sidebar} setSidebar={setSidebar} />
    </div>
      <div className="HomeBackground">
        <div className={sidebar ? "moveImg" : "originImg"}>
          <div className="IntroductionText">
            <h1 className="Introduction">Brandon Cox</h1>
            <p>
              I'm a Frontend Developer from Boulder, Colorado.
            </p>
          </div>
          <div className="ProfileImg">
            <div className="Position">
              <ProfilePicture />
            </div>
          </div>
          <div className="flexImg">
            <img height="450" src={BoulderMapEditTrans} />
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
