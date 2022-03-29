import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home/Home"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Welcome from "./Welcome.js"




const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} /> */}
    </Routes>
  </BrowserRouter>,
  rootElement
);