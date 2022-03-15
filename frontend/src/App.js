import './App.css';
// import { Outlet, Link } from "react-router-dom";
import Header from "./Header/Header"
// import Footer from "./Footer/Footer"
import Name from "./Spring/WelcomePage/Name"
import Title from "./Spring/WelcomePage/Title"
import Test from "./Spring/WelcomePage/ParallaxText/WelcomeParallax"


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