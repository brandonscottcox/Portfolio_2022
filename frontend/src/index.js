import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home/Home"
import Projects from "./Projects/Projects"




const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);