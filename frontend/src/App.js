import React, { useState } from "react";
import './App.css';
import Home from "./Home/Home"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Header from "./Header/Header"


function App() {
  const [sidebar, setSidebar] = useState(false);


  return (
    <>
      {/* <Home sidebar={sidebar} setSidebar={setSidebar} />
      <About sidebar={sidebar} setSidebar={setSidebar}/>
      <Contact sidebar={sidebar} setSidebar={setSidebar}/> */}
      {/* <Header sidebar={sidebar} setSidebar={setSidebar}/> */}
    </>
  );
}

export default App;



/*
 function App() {
  return (
    <div className="WelcomeBackground">
    <Test />
    <Header />
      <div>
        <body>
          <Name />
          <Title />
        </body>
      </div>
    </div>
  );
}*/