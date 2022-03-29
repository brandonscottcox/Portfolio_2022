import React, { useState } from "react";
import "../Scrollbar.css";
import "./Contact.css";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="ContactBackground" id="contact">
      <div className="ContactText">
        <h1>Contact</h1>
        <p>Interested in getting in touch? I'm always lookingfor projects and clients interested in having my on board</p>
      </div>
    </div>
  );
}
