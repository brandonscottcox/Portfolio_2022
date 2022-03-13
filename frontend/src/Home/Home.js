import React from "react";
import "../App.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
// import Footer from "../Footer/Footer"


export default function Home() {
    return(
        <div className="App">
        <Header />
        <Sidebar />
        <body className="HomeBody">Home</body>
        </div>
    )
}