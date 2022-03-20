import React, { useState } from "react";
import "../Scrollbar.css"
import "./Contact.css";
import Header from "../Header/Header";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="ContactBackground">
      <div className={sidebar ? "move" : "origin"}>
      <p id="about">t</p>

      </div>
    </div>
  );
}
