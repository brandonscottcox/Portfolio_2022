import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home/Home"
import About from "./About/About"
import Projects from "./Projects/Projects"
import Resume from "./Resume/Resume"





const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<Home />} />
      <Route path="contact" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="resume" element={<Resume />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);