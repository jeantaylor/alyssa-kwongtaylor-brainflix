import React from "react"; 
import logo from "../assets/Logo/Logo-brainflix.svg"; 
import avatar from "../assets/Images/Mohan-muruge.jpg"; 

export default function header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <a href="./index.html"><img className="header__logo" src={logo} alt="Brainflix logo"/></a>
                <input className="header__search-bar" type="text" id="search" placeholder="Search"></input>
                <div className="header__user-tools">
                    <button className="header__cta">+ upload</button>
                    <div className="header__avatar-wrapper">
                        <img className="header__avatar" src={avatar} alt="User avatar"/>
                    </div>
                </div>
            </div>
        </header>
    ); 
}