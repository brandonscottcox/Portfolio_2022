import React from "react";
import "../App.css";
import Header from "../Header/Header";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <body className="HomeBody">
        <span content="H">H</span>
        <span content="o">o</span>
        <span content="m">m</span>
        <span content="e">e</span>
      </body>
    </div>
  );
}
