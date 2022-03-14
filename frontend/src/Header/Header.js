import React from "react";
import "../App.css";
import HeaderLogo from "../Images/HeaderLogo.png"
import AutorenewIcon from '@mui/icons-material/Autorenew';





export default function Header() {
return (
    <header className="Header">
        <a href="/home">
        <img src={HeaderLogo} alt="Brandon Cox" to="/home"/>
        </a>

        <div className="Renew">
            <a href= "/" title="Refresh">
            <AutorenewIcon style={{ fontSize: 50, color: 'black' }} />
            </a>
        </div>
    </header>
)
}