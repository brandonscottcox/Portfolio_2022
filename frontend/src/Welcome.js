import React, { useState } from "react";
import './App.css';
import Header from "./Header/Header"
import Name from "./Spring/WelcomePage/Name"
import Title from "./Spring/WelcomePage/Title"
import WelcomeParallax from "./Spring/WelcomePage/ParallaxText/WelcomeParallax"

export default function Welcome() {
    const [sidebar, setSidebar] = useState(false);

  return (
    <div className="WelcomeBackground">
    <WelcomeParallax />
    <Header sidebar={sidebar} setSidebar={setSidebar}/>
      <div>
        <body className="WelcomeBody">
          <Name />
          <Title />
        </body>
      </div>
    </div>  
    )
}
