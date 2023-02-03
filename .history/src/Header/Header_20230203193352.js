import React from "react";
import MainLogo from "../000-img/000-FV-logotipo-wide.svg"
import './Header.css'

const Header = () => {
    return  (
        <header className="Header">
            <img src={MainLogo} alt="Main Logo" />
            <ul>
                <li>Chi siamo</li>
                <li>La casa famiglia</li>
                <li>Progetti</li>
                <li>Contatti</li>
            </ul>
        </header>
    )
}

export default Header