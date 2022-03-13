import './App.css';
// import { Outlet, Link } from "react-router-dom";
import Header from "./Header/Header"
// import Footer from "./Footer/Footer"
import Name from "./Spring/WelcomePage/Name"
import Title from "./Spring/WelcomePage/Title"


function App() {
  return (
    <div className="WelcomeBackground">
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
