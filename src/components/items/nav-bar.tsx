import React from 'react';
import ClickButton from './click-button';
import "../../style/items/nav-bar.css"

const NavBar = () => (
    <nav className="nav-bar">
        <div className="nav-bar--container-items">
            <a href="#" className="nav-bar--items">Home</a>
            <a href="#" className="nav-bar--items">Key Feature</a>
            <a href="#" className="nav-bar--items">Pricing</a>
            <a href="#" className="nav-bar--items">Testiminical</a>
            <a href="#" className="nav-bar--items">FAQ</a>
        </div>
        <ClickButton value="Try for free"/>
    </nav>
)

export default NavBar