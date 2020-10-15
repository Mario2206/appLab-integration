import React from 'react';
import ClickButton from './click-button';
import "../../style/items/nav-bar.css"
import {Link} from "react-scroll";
import {scrollViews} from '../../App';

const NavBar = () => {
    
    const SCROLL_DURATION = 1000

    return (
    <nav className="nav-bar">
        <div className="nav-bar--container-items">
            <Link className="nav-bar--items" 
            to={scrollViews.HOME} 
            duration={SCROLL_DURATION} 
            smooth={true}
            >Home</Link>
            <Link  
            className="nav-bar--items" 
            to={scrollViews.KEY_FEATURES} 
            offset={50} 
            smooth={true} 
            duration={SCROLL_DURATION}
            >Key Feature</Link>
            <Link  
            className="nav-bar--items" 
            to={scrollViews.PRICING} 
            offset={100} 
            smooth={true} 
            duration={SCROLL_DURATION}
            >Pricing</Link>
            <Link 
            className="nav-bar--items"
            to={scrollViews.TESTIMINICAL} 
            offset={-150} 
            smooth={true} 
            duration={SCROLL_DURATION}
            >Testiminical</Link>
            <Link 
            className="nav-bar--items"
            to={scrollViews.FAQ} 
            offset={50} 
            smooth={true} 
            duration={SCROLL_DURATION}
            >FAQ</Link>
        </div>
        <ClickButton value="Try for free"/>
    </nav>
)}

export default NavBar