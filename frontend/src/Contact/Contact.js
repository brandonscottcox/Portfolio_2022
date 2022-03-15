import React, { useState } from "react";
import "../App.css";
import Header from "../Header/Header";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="WelcomeBackground">
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <div className={sidebar ? "move" : "origin"}>
      <body className="HomeBody">
        <span content="C">C</span>
        <span content="o">o</span>
        <span content="n">n</span>
        <span content="t">t</span>
        <span content="a">a</span>
        <span content="c">c</span>
        <span content="t">t</span>

      </body>
      </div>
    </div>
  );
}
