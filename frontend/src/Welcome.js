import React, { useState } from "react";
import './App.css';
import Header from "./Header/Header"
import Name from "./Spring/WelcomePage/Name"
import Title from "./Spring/WelcomePage/Title"
import WelcomeParallax from "./Spring/WelcomePage/ParallaxText/WelcomeParallax"

export default function Welcome() {
  return (
    <div className="WelcomeBackground">
    <WelcomeParallax />
    <Header/>
      <div>
        <body>
          <Name />
          <Title />
        </body>
      </div>
    </div>  
    )
}
