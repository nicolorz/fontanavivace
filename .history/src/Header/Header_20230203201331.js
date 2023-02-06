import React from "react";
import MainLogo from "../000-img/000-FV-logotipo-wide.svg"
import './Header.css'

const Header = () => {
    return  (
        <header className="Header">
            <img src={MainLogo} alt="Main Logo" />
            <ul>
                <li><a href="#">Chi siamo</a></li>
                <li><a href="#">La casa famiglia</a></li>
                <li><a href="#">Progetti</a></li>
                <li><a href="#">Contatti</a></li>
                
            </ul>
        </header>
    )
}

export default Header