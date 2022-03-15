import React, { useState } from "react";
import "./Home.css";
import Header from "../Header/Header";
import ProfilePicture from "../Images/SlackTrans.png"


export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="HomeBackground">
    <Header sidebar={sidebar} setSidebar={setSidebar}/>
    <div className="CenterImg">

        <div className="Test">
          <img height="400" width="400" className="ProfilePicture" src={ProfilePicture} />
        </div>
    </div>
    <div className={sidebar ? "move" : "origin"}>
      <body>
        <span content="H">H</span>
        <span content="o">o</span>
        <span content="m">m</span>
        <span content="e">e</span>
      </body>
      </div>
    </div>
  );
}
