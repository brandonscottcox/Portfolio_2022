import React from "react";
import "../App.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";


export default function Contact() {
    return(
        <div className="App">
        <Header />
        <Sidebar />
        <body className="HomeBody">Contact</body>
        </div>
    )
}