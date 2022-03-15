import React, { useState } from "react";
import "./About.css";
import Header from "../Header/Header";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="AboutBackground">
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <div className={sidebar ? "move" : "origin"}>
      <body className="HomeBody">
        <span content="A">A</span>
        <span content="b">b</span>
        <span content="o">o</span>
        <span content="u">u</span>
        <span content="t">t</span>


      </body>
      </div>
    </div>
  );
}
