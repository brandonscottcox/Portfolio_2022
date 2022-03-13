import React from "react";
import "../App.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";


export default function About() {
    return(
        <div className="App">
        <Header />
        <Sidebar />
        <body className="HomeBody">About</body>
        </div>
    )
}