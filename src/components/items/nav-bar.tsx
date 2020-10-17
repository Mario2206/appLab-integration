import React from 'react';
import ClickButton from './click-button';
import "../../style/items/nav-bar.css"
import {Link} from "react-scroll";
import {scrollViews} from "../../bin/scroll-params"
import {ScrollLinkComponent} from "./scroll-link"

const NavBar = () => {

    return (
    <nav className="nav-bar">
        <div className="nav-bar--container-items">

            <ScrollLinkComponent 
            className="nav-bar--items" 
            to={scrollViews.HOME}
            >
                Home
            </ScrollLinkComponent>

            <ScrollLinkComponent  
            className="nav-bar--items" 
            to={scrollViews.KEY_FEATURES} 
            >
                Key Feature
            </ScrollLinkComponent>

            <ScrollLinkComponent  
            className="nav-bar--items" 
            to={scrollViews.PRICING} 
            >
                Pricing
            </ScrollLinkComponent>

            <ScrollLinkComponent 
            className="nav-bar--items"
            to={scrollViews.TESTIMINICAL} 
            >
                Testiminical
            </ScrollLinkComponent>
            <ScrollLinkComponent 
            className="nav-bar--items"
            to={scrollViews.FAQ} 
            >
                FAQ
            </ScrollLinkComponent>
        </div>
        <ClickButton value="Try for free"/>
    </nav>
)}

export default NavBar