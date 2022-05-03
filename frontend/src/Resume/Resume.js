import React, { useState } from "react";
import Header from "../Header/Header";
import "./Resume.css";

export default function Resume() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div>
        <div>
          <Header sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <div className="ResumeBackground">
          <h1>Resume.</h1>
        </div>
      </div>
    </>
  );
}
