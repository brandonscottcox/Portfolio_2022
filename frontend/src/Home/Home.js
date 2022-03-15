import React, { useState } from "react";
import "../App.css";
import Header from "../Header/Header";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
    <Header sidebar={sidebar} setSidebar={setSidebar}/>
    <div className={sidebar ? "move" : "origin"}>
      <body className="HomeBody">
        <span content="H">H</span>
        <span content="o">o</span>
        <span content="m">m</span>
        <span content="e">e</span>
      </body>
      </div>
    </div>
  );
}
